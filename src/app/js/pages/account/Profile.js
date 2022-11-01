import React, { useState } from "react";
import "../../../styles/common/profile.scss"
import {data} from './profileData'
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
      <span className="container profile-text">
        Manage your Account Details securely
      </span>
      <div className="container profile-cart">
      <Card className="text-center">
      <Card.Header>{data[0].title}</Card.Header>
      <Card.Body>
        
        <Card.Text>
          {data[0].descripition}
        </Card.Text>
      
      </Card.Body>
      <Card.Footer className="text-muted"><Button variant="primary">Go somewhere</Button></Card.Footer>
    </Card>
      </div>
    </div>
  );
};

export default Profile;
