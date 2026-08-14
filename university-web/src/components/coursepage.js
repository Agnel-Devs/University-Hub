import CourseCard from "./CourseCard";
import RegistrationForm from "./RegistratonForm";
import CourseList from "./courselist";
import SearchBar from "./searchbar";
function CoursePage(){
    return(
        <div>
            <CourseCard
              title="Introduction to programming"
              code="JS103"
              credits="4"
            />
            <br />
            <h2 style={{ textAlign: "center" }}>Search here</h2>
            <SearchBar />
            <RegistrationForm />
            <h2>All Courses (Dynamic List)</h2>
            <CourseList />
          </div>
    );
}
export default CoursePage;