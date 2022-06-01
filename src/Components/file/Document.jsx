import React,{useState,useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Qualification from '../qualification/Qualification'
// import Navbar from './Navigation/Navbar'
import './files.css'

export default function Document() {
  const navigation=useNavigate()

  const initialValues = {
    profile:"",
    matric:"",
    secondary:"",
    degree:""
   
  };
  const [userd, setUserd] = useState(initialValues);
  const [userderror, setUserderror] = useState({});
  const [submitdata, setSubmitdata] = useState(false);


  

  const [image, setImage] = useState(null)

const onImageChange = (event) => {
 if (event.target.files && event.target.files[0]) {
   setImage(URL.createObjectURL(event.target.files[0]));
 }


  const { name, value } = event.target;
  setUserd({ ...userd, [name]: value });
  setUserderror(initialValues);
};


const fileChange=(event)=>{
  const { name, value } = event.target;
  setUserd({ ...userd, [name]: value });
  setUserderror(initialValues);
}

const submitInfo = (e) => {
  e.preventDefault();
  setUserderror(valid(userd));

  setSubmitdata(true);

};

useEffect(() => {
  if (Object.keys(userderror).length == 0 && submitdata) {
    navigation("/Review");
  }
}, [userderror]);


const valid = (value) => {
  const err = {};
  if (!value.profile) {
    err.profile = "* first name required ";
  }
  if (!value.matric) {
    err.matric = "* first name required ";
  }

  if (!value.secondary) {
    err.secondary = "* first name required ";
  }

  if (!value.degree) {
    err.degree = "* first name required ";
  }
   return err;
}


  return (
    <div className="login_page" id='matric'>
      <form onSubmit={submitInfo}>
        <h1>Documentation</h1>
        <div className="details1" id='doc'>

        <div className='d-flex'>
            <h4>1.Upload your profile photo:</h4>
            <input type='file' accept='image/.jpg,image/.png,image/.jpeg' name="profile" value={userd.profile} className='file' onChange={onImageChange} />

            <img src={image}   className='image'/>

          </div>
          <p>{userderror.profile}</p>



          <div className='d-flex'>
            <h4>2.Upload your 10th certificate:</h4>
            <input type='file' accept='.pdf,.doc' className='file'name="matric" value ={userd.matric} onChange={fileChange}/>
          </div>

          <p>{userderror.matric}</p>

          <div className='d-flex'>
            <h4>3.Upload your 12th certificate:</h4>
            <input type='file' accept='.pdf,.doc' className='file'name="secondary" value={userd.secondary} onChange={fileChange}/>
          </div>
          <p>{userderror.secondary}</p>

          <div className='d-flex'>
            <h4>4.Upload your degree certificate:</h4>
            <input type='file' accept='.pdf,.doc' className='file'name="degree" value={userd.degree} onChange={fileChange}/>
          </div>
        </div>
        <p>{userderror.degree}</p>


        <div className=' footer d-flex '>
            <div>
              <NavLink to='/Qualification'> <button className='done' >
                Previous
              </button></NavLink>
            </div>

            <div>
              <button type="submit" className='done' id='btn'
              >
                Preview
              </button>
            </div>
          </div>


      </form>

    </div>

  )
}
