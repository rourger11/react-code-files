import React, { useState, useEffect } from "react";
// import Navbar from '../Navigation/Navbar'
import { useNavigate } from "react-router-dom";
import "./Basic.css";
import { MultiSelect } from "react-multi-select-component";
import Qualification from "../qualification/Qualification";


// import Multi from './Multi'
export default function Basicinfo() {
  const navigate = useNavigate();
  const initialValues = {
    firstName:"",
    lastName: "",
    phoneNumber: "",
    gender: "",
  };
  const [userd, setUserd] = useState(initialValues);
  const [userderror, setUserderror] = useState({});
  const [submitdata, setSubmitdata] = useState(false);

  const input = (e) => {
    const { name, value } = e.target;
    setUserd({ ...userd, [name]: value });
    setUserderror(initialValues);
  };

  const submitInfo = (e) => {
    e.preventDefault();
    setUserderror(valid(userd));

    setSubmitdata(true);
    localStorage.setItem("userinfo", JSON.stringify(userd));
   
   console.log(userd)

  };

  const valid = (value) => {
    const re = /^[0-9\b]+$/;
    const Nregex =/^[a-zA-Z'-'s]{1,40}$/i;
    const err = {};
    if (!value.firstName){
      err.firstName = "* first name required,and should be in alphabets";
    } else if (value.firstName.length < 5 || !Nregex.test(value.firstName)){
      err.firstName =
        "* first name length should be 5 character long,should be in alphabets ";
    }
    
    if (!value.lastName) {
      err.lastName = "* last name required ";
    }
    else if (value.lastName.length < 5 || !Nregex.test(value.lastName)){
      err.firstName =
        "* first name length should be 5 character long,should be in alphabets ";
    }
    if (!value.phoneNumber || value.phoneNumber.length !== 10) {
      err.phoneNumber =
        "* phoneNumber required, should't be character, number should be 10 digit long";
    }
    if (!value.gender) {
      err.select = "*select one required ";
    }

    

    return err;

    
  };
  const options = [
    { label: 'Cricket',value: "cricket" },
    { label: 'Video-Games', value: " games" },
    { label: 'Reading', value: "reading books" }
  ];
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (Object.keys(userderror).length == 0 && submitdata) {
      navigate("/Qualification");

    }
  }, [userderror]);

  return (
    <>
      {/* <Navbar /> */}
      <div className="main">
        <div className="login_page">
          <form onSubmit={submitInfo}>
            <h1>Basic Information</h1>
            
            <div className="details">
              <h4>*Firstname:</h4>
              <input
                type="text"
                placeholder="Enter your first name"
                className="box"
                name="firstName"
                value={userd.firstName}
                onChange={input}
              />
              <br />
              <p>{userderror.firstName}</p>

              <h4>*Lastname:</h4>
              <input
                type="text"
                placeholder="Enter your last name"
                className="box"
                name="lastName"
                value={userd.lastName}
                onChange={input}
              />
              <br />
              <div>
                <p>{userderror.lastName}</p>

                <h4>*Gender:</h4>
                <div className="d-flex">
                  <div>
                    <input
                      type="radio"
                      id="Male"
                      checked={userd.gender == "male"}
                      name="gender"
                      value="male"
                      onClick={input}
                    />
                    <label>Male</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="fmale"
                      name="gender"
                      checked={userd.gender == "female"}
                      value="female"
                      onClick={input}
                    />
                    <label>Female</label>
                  </div>
                </div>
              </div>
              <p>{userderror.select}</p>

              <h4>Hobbies:</h4>
              <div className='multi'>

              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
              <label for="vehicle1"> I have a bike</label><br/>
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
              <label for="vehicle2"> I have a car</label><br/>
              <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
              <label for="vehicle3"> I have a boat</label><br/> 

                {/* <MultiSelect
                  options={options}
                  value={selected}
                  onChange={setSelected}
                  labelledBy="Select"
                  name='multi'

                />     */}
            
              </div>
              {/* <p>{userderror.multi}</p> */}


              <h4>*Phone no:</h4>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="box"
                name="phoneNumber"
                value={userd.phoneNumber}
                onChange={input}
              />
              <br />
              <p>{userderror.phoneNumber}</p>

              <div className="send">
                <button id="button">Next</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
