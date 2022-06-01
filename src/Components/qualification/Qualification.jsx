import React, { useState, useEffect } from "react";
import "./Qualify.css";
// import Navbar from './Navigation/Navbar'
import { MultiSelect } from "react-multi-select-component";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Document from "../file/Document";

export default function Qualification() {
  const navigation = useNavigate();
  const initialValue = { matric_marks: "", twelfth_marks: "",course: "",graduation_marks: ""};

  const [newuser, setUser] = useState(initialValue);
  const [usererror, setUsererror] = useState({});
  const [submitdata, setSubmitdata] = useState(false);

  const dataSubmit = (e) => {
    e.preventDefault();
    setUsererror(valid(newuser));
    setSubmitdata(true);
    localStorage.setItem("userinformation", JSON.stringify(newuser));

  };

  // on change data
  const input = (e) => {
    const { name, value } = e.target;
    setUser({ ...newuser, [name]: value });
    setUsererror(initialValue);
  };

  const valid = (value) => {
    const re = /^[0-9\b]+$/;
    const perregex = /\b(?<!\.)(?!0+(?:\.0+)?%)(?:\d|[1-9]\d|100)(?:(?<!100)\.\d+)?%$/;
    const err = {};

    if (!value.matric_marks) {
      err.matric_marks = "* marks required ";
    } else if(value.matric_marks.length > 5 || !perregex.test(value.matric_marks)) {
      err.matric_marks = "* please enter valid percentage";
    }

    if (!value.twelfth_marks) {
      err.twelfth_marks = "* marks required ";
    } else if(value.twelfth_marks.length > 5 || !perregex.test(value.twelfth_marks)) {
      err.twelfth_marks = "* please enter valid percentage";
    }

    if (!value.graduation_marks) {
      err.graduation_marks = "* marks required ";
    } else if(value.graduation_marks.length > 5 || !perregex.test(value.graduation_marks)) {
      err.graduation_marks = "* please enter valid percentage";
    }
    if (!value.course) {
      err.course = "* select one required ";
    }
    return err;
  };

  // for 10th class
  const options = [
    { label: "Math's", value: "Subject1" },
    { label: "Science", value: "Subject2" },
    { label: "Social-Science", value: "Subject3" },
    { label: "Hindi", value: "Subject4" },
    { label: "English", value: "Subject5" },
    { label: "Drawing", value: "Subject6" },
  ];
  const [selected, setSelected] = useState([]);

  // for 12th student

  const option = [
    { label: "Math's", value: "Subject1" },
    { label: "Physics", value: "Subject2" },
    { label: "Chemistry", value: "Subject3" },
    { label: "Information Technology", value: "Subject4" },
  ];
  const [select, setSelect] = useState([]);

  // for graduate student

  const option1 = [
    { label: "Math's", value: "Subject1" },
    { label: "Physics", value: "Subject2" },
    { label: "Chemistry", value: "Subject3" },
    { label: "Information Technology", value: "Subject4" },
  ];
  const [select1, setSelect1] = useState([]);

  useEffect(() => {
    if (Object.keys(usererror).length == 0 && submitdata) {
      navigation("/Document");

    }
  }, [usererror]);

  const previous = (e) => {
    e.preventDefault();
    navigation("/Basicinfo");
  };

  return (
    <div className="login_page" id="matric">
      <form onSubmit={dataSubmit}>
        <h1>Qalification Details</h1>
        <div className="details1">
          <h4>Details of 10th - Standard:</h4>
          <div className=" marks d-flex">
            <div>
              <p>*Marks in % </p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter"
                className="box1"
                name="matric_marks"
                onChange={input}
              />
            </div>
          </div>
          <p>{usererror.matric_marks}</p>

          <p className="marks "> *Subjects: </p>

          <div className="multi">
            <MultiSelect
              options={options}
              value={selected}
              onChange={setSelected}
              labelledBy="Select" 
              name='subject'
              checked={newuser.subject == (options.selected)}
            />
          </div>

          {/* for 12th standard */}

          <h4>Details of 12th - Standard:</h4>
          <p></p>
          <div className=" marks d-flex">
            <div>
              <p>*Marks in % </p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter"
                className="box1"
                name="twelfth_marks"
                onChange={input}
              />
            </div>
          </div>
          <p>{usererror.twelfth_marks}</p>

          <p className="marks "> *Subjects: </p>

          <div className="multi">
            <MultiSelect
              options={option}
              value={select}
              onChange={setSelect}
              labelledBy="Select"
            />
          </div>

          <h4>Details of Bachelor's degree:</h4>

          <p className="marks ">Select your Stream: </p>
          <br />

          <div className="d-flex">
            <div>
              <input
                type="radio"
                id="sub"
                name="course"
                value="btech"
                checked={newuser.course == "btech"}
                onClick={input}
              />
              <label for="btech">B.tech</label>
            </div>

            <div>
              <input
                type="radio"
                id="sub2"
                name="course"
                value="bsc"
                checked={newuser.course == "bsc"}
                onClick={input}
              />
              <label for="bsc">Bsc</label>
            </div>
          </div>
          <br />
          <p>{usererror.course}</p>

          <div className=" marks d-flex">
            <div>
              <p>*Marks in % </p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter"
                className="box1"
                name="graduation_marks"
                onChange={input}
              />
            </div>
          </div>
          <p>{usererror.graduation_marks}</p>

          <p className="marks "> *Subjects: </p>

          <div className="multi">
            <MultiSelect
              options={option1}
              value={select1}
              onChange={setSelect1}
              labelledBy="Select"
            />
          </div>

          <div className=" footer d-flex ">
            <div>
              <button type="submit" className="done" onClick={previous}>
                Previous
              </button>
            </div>

            <div>
              <button type="submit" className="done" id="btn">
                Next
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
