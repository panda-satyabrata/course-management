import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import courseStores from "../stores/courseStores";
import { loadCourses, deleteCourse } from "../actions/courseActions";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStores.getCourses());

  useEffect(() => {
    courseStores.addChangeListener(onChange);
    if (courseStores.getCourses().length === 0) loadCourses();
    return () => courseStores.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setCourses(courseStores.getCourses());
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
}
export default CoursesPage;
