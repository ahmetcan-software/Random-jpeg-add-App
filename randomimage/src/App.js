import "./App.css";
import Course from "./Course";
import { useState } from "react";

function getRandomCourse() {
  // resimleri random seçmek için

  const courseArray = ["Angular", "Bootstrapt", "Frontend", "Javascript"];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]); //durumu gösteren yapı.
  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
  };
  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });
  return (
    <div className="App">
      <button className="buttonApp" onClick={handleClick}>
        Kurs Ekle
      </button>
      <div className="courseList">{courseList}</div>
      {}
    </div>
  );
}

export default App;
