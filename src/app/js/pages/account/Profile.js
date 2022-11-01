import React, { useState } from "react";
import "../../../styles/common/profile.scss"
import {data} from '../../components/Header/constant'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Profile = () => {
  const [profileData,setProfileData]=useState(data)
  console.log(profileData)
    return (
    <div className="profile-container">
      <nav className="container-fluid  profile-menu">
        <ul>
          <li><a href="#">PROFILE INFORMATION</a></li>
          <li><a href="#">DOCUMENTS</a></li>
        </ul>
      </nav>
      <span className="container profile-text ">
        Manage your Account Details securely
      </span>
      
      <div className="container profile-cart">
        {data.map((item,index)=>(
            <Card className="text">
      <Card.Header className="cart-title" >{item.title}</Card.Header>
      <Card.Body style={{borderBottom:"1px solid gray"}}>
        
        <Card.Text  style={{opacity: ".8",padding:"5px",height:"150px"}}>
          {item.descripition}
        </Card.Text>
      
      </Card.Body>
 <button className="profile-btn"   style={{marginTop:"10px",marginBottom:"10px"}}>Add Details</button>
    </Card>
        ))}
      </div>
    </div>
  );
};

export default Profile;
