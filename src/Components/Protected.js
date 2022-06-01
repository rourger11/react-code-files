import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Protected(props) {
    const Navigate= useNavigate();
    const {Component}=props
    useEffect(()=>{
        let signIn = localStorage.getItem('user');
        if(!signIn){
            Navigate('/')
        }
    },[])
  return (
    <div> <Component /> </div>
  )
}
