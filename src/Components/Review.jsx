import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Review() {
  const navigation = useNavigate()




  let data = JSON.parse(localStorage.getItem("userinfo"));
  let qualification_data = JSON.parse(localStorage.getItem("userinformation"))
 
  const getAnswer = async () => {
    await axios.post(" http://localhost:3008/user ", data);
console.log("get user data found")
  };
  const education_data = async () => {
    await axios.post("http://localhost:3008/education_details", qualification_data);
console.log("get user data found")
  };

  const submitData=()=>{
    getAnswer()
    education_data()

    alert("form submit successfully")
    
    // localStorage.clear();
    // navigation('/Login')

    
  }
;

 
 
  return (
    <div>
      <div className="login_page">
        <h1>Preview Data</h1>
        <p>Basic Information:</p><br/>

        {Object.entries(data).map((item) => {
          
          return <p>{`${item[0]} : ${item[1]}`}</p>;
        })}
        <br/>

        <p>Basic Information:</p><br/>

        {Object.entries(qualification_data).map((item1) => {
          
          return <p>{`${item1[0]} : ${item1[1]}`}</p>;
        })}
        <br/>


        <div className=" footer d-flex ">
          <div>
            <button type="submit" className="done" >
              Previous
            </button>
          </div>

          <div>
            <button type="submit" className="done" id="btn" onClick={submitData}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
