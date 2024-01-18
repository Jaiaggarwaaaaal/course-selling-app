import { useEffect, useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    function handleFetchSuccess(data) {
      setCourses(data.courses);
    }

    function handleFetchError(error) {
      console.error("Error fetching courses:", error);
    }

    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:3000/admin/courses/", {
          method: "GET",
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        handleFetchSuccess(data);
      } catch (error) {
        handleFetchError(error);
      }
    };

    fetchCourses();

    // Cleanup function
    return () => {
      // Perform cleanup if needed
    };
  }, []);

  return (
    <div>
        coursesssss
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
}

function Course(props) {
  return (
    <div style={{
      border: "2px",
      margin: 10
    }}>
      {props.course.Title}
      {props.course.Description}
    </div>
  );
}

export default Courses;
