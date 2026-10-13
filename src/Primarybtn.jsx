import React from "react";
import "./App.css";

// const Primarybtn = (props) => {
//   return <button className="btn"> {props.fullName} </button>;
// }; <-- 1 way to use props

const Primarybtn = ({fullName}) => {
  return <button className="btn"> {fullName} </button>;
};

export default Primarybtn;
