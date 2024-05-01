import Angular from "./images/angular.png";
import Bootstrapt from "./images/bootstrapt.png";
import Frontend from "./images/frontend.png";
import Javascript from "./images/javascript.png";
import React from "react";

const coursMap = {
  Angular: Angular,
  Bootstrapt: Bootstrapt,
  Frontend: Frontend,
  Javascript: Javascript,
};

function Course({ courseName }) {
  console.log(coursMap[courseName]);

  return (
    <div>
      <img className="imgApp" src={coursMap[courseName]} alt="" />
    </div>
  );
}

export default Course;
