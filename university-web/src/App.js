/*// Valid JSX
function App() {
  const universityName = "University Hub";

  return (
    <div className="main-container">
      <h1>Welcome to {universityName}</h1>
      <p>Manage your academic life here.</p>
    </div>
  );
}

export default App;*/
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import CourseDetails from "./components/coursedetails";
import StudentPage from "./components/studentpage";
import Navbar from "./components/navbar";
import CoursePage from "./components/coursepage";
import Contact from "./components/contact";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/Students" element={<StudentPage />} />
        <Route path="/courses/" element={<CoursePage />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;