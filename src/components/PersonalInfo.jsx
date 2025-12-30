import React from "react";

function PersonalInfo(props) {
  return (
    <div className="pers">
      <h1>Name : {props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}
export default PersonalInfo;