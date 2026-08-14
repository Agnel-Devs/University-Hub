import React from "react";
import { Link } from "react-router-dom";

function CourseList() {
    const courses = [
        { id: 100, title: "Introduction to Java programming", credits: 3 },
        { id: 101, title: "Introduction to Python programming", credits: 3 }
    ];

    return (
        <ul>
            {courses.map((course) => (
                <li key={course.id}>
                    <Link to={`/courses/${course.id}`}>
                        <b>{course.title}</b>
                    </Link>{" "}- {course.credits} Credits
                </li>
            ))}
        </ul>
    );
}

export default CourseList;