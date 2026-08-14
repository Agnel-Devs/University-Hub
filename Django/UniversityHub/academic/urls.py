
from django.urls import path,include
from rest_framework.routers import DefaultRouter
from django.contrib import admin
from academic import views
from rest_framework.authtoken.views import obtain_auth_token

router=DefaultRouter()
router.register(r'Courses',views.CourseViewSet)
router.register(r'Students',views.StudentViewSet)
router.register(r'Departments',views.DepartmentViewSet)

urlpatterns = [
    #path('students/', views.student_list),

    #path(route, view, name)
    path('admin/',admin.site.urls),
    path('api-token-auth/',obtain_auth_token),
    path('hello/', views.hello_world, name='hello'),
    path('courses/', views.course_list, name='course_list'),
    path("register-student/", views.student_profile, name="student_create"),
    path("register/", views.student_register, name="register"),
    path("delete-student/<int:id>/", views.delete_student),
    path('profile/<int:id>/', views.student_profile),

    #path("api/courses/", views.api_course_list, name="course_list_api"),
    #DRF Router
    path('api/',include(router.urls)),
]