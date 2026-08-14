from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticated;


#def student_list(request):
#    return HttpResponse("List of Students")

def hello_world(request):
    # This returns raw text, not HTML
    return HttpResponse("Welcome to University Hub!")
from django.shortcuts import render
from .models import course

def course_list(request):
    # 1. Fetch data from DB
    all_courses = course.objects.all()
    # 2. Context: A dictionary mapping template variable names to Python objects
    context = {
        'courses': all_courses,
        'page_title': 'Available Courses'
    }
    # 3. Render: Combine the request, the template, and the data
    return render(request, 'academic/course_list.html', context)

from django.shortcuts import render, redirect
from .forms import StudentForm
from django.contrib.auth.models import User

def student_register(request):

    if request.method == 'POST':
        form = StudentForm(request.POST)

        if form.is_valid():

            # get login fields safely
            username = request.POST.get('username', '').strip()
            password = request.POST.get('password', '').strip()
            email = request.POST.get('email', '').strip()

            # validate login fields first
            if not username or not password or not email:
                return render(request,'academic/student_form.html',{
                    'form': form,
                    'error': 'എന്തോന്നടേയ്, ബുദ്ധിയില്ലേ?,എല്ലാം fill ചെയ്യടേയ്'
                })

            # prevent duplicate username crash
            if User.objects.filter(username=username).exists():
                return render(request,'academic/student_form.html',{
                    'form': form,
                    'error': 'ഈ Username ഇതിനകം ഉപയോഗത്തിലാണ്. മറ്റൊന്ന് പരീക്ഷിക്കൂ.'
                })

            # create user first
            user = User.objects.create_user(
                username=username,
                password=password,
                email=email
            )

            # THEN create student object
            student = form.save(commit=False)
            student.user = user
            student.save()

            form.save_m2m()

            return redirect('course_list')

    else:
        form = StudentForm()

    return render(request, 'academic/student_form.html', {'form': form})           # create user first

from django.contrib.auth.decorators import login_required, user_passes_test
from django.http import HttpResponseForbidden
from django.shortcuts import render, redirect, get_object_or_404
from .models import Student, course
# 1. The @login_required Decorator
# If a guest tries to access this, they are redirected to the Login page automatically.
@login_required
def course_list(request):
    # Logic remains the same...
    courses = course.objects.all()

    return render(
        request,
        "academic/course_list.html",
        {"courses": courses}
    )

# 2. Custom Permission Checks
# Define a check function: Returns True if user is a Staff member
def is_admin(user):
    return user.is_staff

@user_passes_test(is_admin)
def delete_student(request, id):
    # Only Staff can reach this code
    student = Student.objects.get(id=id)
    if student.user:
        student.user.delete()
    else:
        student.delete()
    return redirect('course_list')
@login_required
def student_profile(request, id):

    # 1. Fetch the requested profile
    profile = Student.objects.get(id=id)

    # 2. Check if the logged-in user matches the profile owner
    # (Assuming we linked the Student model to the User model)
    if request.user != profile.user:
        return HttpResponseForbidden("അമ്പടാ പുളൂസൂ!,You are not authorized to view this profile.")
    
    else:
         return HttpResponse("Profile allowed")
    #JSON
from django.http import JsonResponse
def api_course_list(request):
    # 1. Get data
    courses = course.objects.all()

    # 2. Convert Python Objects to Dictionary (Serialization)
    # We cannot send Python objects directly over the internet.
    data = {
        'count': courses.count(),
        'results': list(courses.values('name', 'code', 'credits'))
    }

    # 3. Return JSON Response (Not HTML)
    return JsonResponse(data)
from rest_framework import viewsets
from .models import course, department, Student
from .serializers import CourseSerializer, StudentSerializer, DepartmentSerializer

# handles GET, POST, PUT and DELETE
class CourseViewSet(viewsets.ModelViewSet):
    queryset = course.objects.all()
    serializer_class = CourseSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes=[IsAuthenticated]

class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = department.objects.all()
    serializer_class = DepartmentSerializer

