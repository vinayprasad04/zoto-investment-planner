import React, { useState } from "react";
import "../../../styles/common/profile.scss"
import {data} from '../../components/Header/constant'

import { PlusCircle} from 'react-bootstrap-icons';
import { FileMinus} from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card';
const Profile = () => {
  const [profileData,setProfileData]=useState(data)
  const [toggleProfile,setToggleProfile]=useState(true)
  const [toggleDocument,setToggleDocument]=useState(false)
  const [add1,setAdd1]=useState(false)
  const [add2,setAdd2]=useState(false)
  const [add3,setAdd3]=useState(false)
  const [add4,setAdd4]=useState(false)
  
  const handletoggle=()=>{
      setToggleProfile(true)
      setToggleDocument(false)
  }
  const handletoggleDocument=()=>{
      setToggleDocument(true)
      setToggleProfile(false)
  }
  const handleAdd=()=>{
  setAdd1(!add1)
  setAdd2(false)
  setAdd3(false)
  setAdd4(false)
  }
  const handleAdd1=()=>{
    setAdd1(false)
    setAdd2(!add2)
    setAdd3(false)
    setAdd4(false)
    }
    const handleAdd2=()=>{
      setAdd1(false)
      setAdd2(false)
      setAdd3(!add3)
      setAdd4(false)
      }
      const handleAdd3=()=>{
        setAdd1(false)
        setAdd2(false)
        setAdd3(false)
        setAdd4(!add4)
        }
    return (
        <>

    <div className="profile-container">
      <nav className="container-fluid  profile-menu">
        <ul>
          <li style={{cursor:"pointer"}} onClick={handletoggle}>PROFILE INFORMATION</li>
          <li style={{cursor:"pointer"}} onClick={handletoggleDocument} >DOCUMENTS</li>
        </ul>
      </nav>
      {toggleProfile && 
<>


      <span className="container profile-text ">
        Manage your Account Details securely
      </span>
      
      <div className="container profile-cart">
        {data.map((item,index)=>(
            <Card className="text">
      <Card.Header className="cart-title" >{item.title}</Card.Header>
      <Card.Body style={{borderBottom:"1px solid #dfeef5"}}>
        
        <Card.Text  style={{opacity: ".8",padding:"5px",height:"150px"}}>
          {item.descripition}
        </Card.Text>
      
      </Card.Body>
 <button className="profile-btn"   style={{marginTop:"10px",marginBottom:"10px"}}>Add Details</button>
    </Card>
        ))}
      </div>
      </>
}
    </div>
      
{
    toggleDocument && 
    <div className="container document-container">
      <div className="document-heading">
        <h5>Upload & Manage your documents securely.</h5>
        <span>At least one document is required for each proof.</span>
      </div>
      <div className="document-cheque">
      <div className="Add-icon">

      <span className="documnet-index-text">CANCELLED CHEQUE COPY</span>
      {
       !add1 &&
      <PlusCircle onClick={handleAdd} color="gray" size={30} style={{marginRight:"20px",marginTop:"10px",cursor:"pointer"}} />
      }
     {
      add1 &&
     <FileMinus onClick={handleAdd} size={30} style={{marginRight:"20px",marginTop:"10px",cursor:"pointer"}}/>

     } 
      </div>
        { add1 && <div className="document-text">
              <div className="text">
              <span className="document-index">01</span>
              <span className="document-index-heading">Cancelled Cheque<br/><p style={{fontSize:"12px",opacity:".7"}}>Add a copy of cancelled cheque for account verification</p></span>
              </div>
         <button className="profile-btn">Upload</button>
         </div>}
      </div>
      {/* {second} */}
      <div className="document-cheque">
      <div className="Add-icon">

      <span className="documnet-index-text">DATE OF BIRTH PROOF</span>
      {
       !add2 &&
      <PlusCircle onClick={handleAdd1} color="gray" size={30} style={{marginRight:"20px",marginTop:"10px",cursor:"pointer"}} />
      }
     {
      add2 &&
     <FileMinus onClick={handleAdd1} size={30} style={{marginRight:"20px",marginTop:"10px",cursor:"pointer"}}/>

     } 
      </div>
        { add2 &&<>

         <div className="document-text">
              <div className="text">
              <span className="document-index">01</span>
              <span className="document-index-heading">Birth Certificate<br/><p style={{fontSize:"12px",opacity:".7"}}>Official document issued to record a person's birth, name, place, date of birth, and parentage.</p></span>
              </div>
         <button className="profile-btn">Upload</button>
         </div>
         <div className="document-text">
              <div className="text">
              <span className="document-index">02</span>
              <span className="document-index-heading">SSLC Book/Certificate<br/><p style={{fontSize:"12px",opacity:".7"}}>Secondary School Leaving Certificate issued by School.</p></span>
              </div>
         <button className="profile-btn">Upload</button>
         </div>
         <div className="document-text">
              <div className="text">
              <span className="document-index">03</span>
              <span className="document-index-heading">Passport<br/><p style={{fontSize:"12px",opacity:".7"}}>Certifying the holder's identity and citizenship, example help subtext here.</p></span>
              </div>
         <button className="profile-btn">Upload</button>
         
         </div>
         <div className="document-text">
              <div className="text">
              <span className="document-index MORE-OPTIONS">MORE OPTIONS •••</span>
                       </div>
         </div>
         
         
         </>
         
         }
      </div>
      {/* {third} */}
      <div className="document-cheque">
      <div className="Add-icon">

      <span className="documnet-index-text">ADDRESS PROOF DOCUMENT</span>
      {
       !add3 &&
      <PlusCircle onClick={handleAdd2} color="gray" size={30} style={{marginRight:"20px",marginTop:"10px",cursor:"pointer"}} />
      }
     {
      add3 &&
     <FileMinus onClick={handleAdd2} size={30} style={{marginRight:"20px",marginTop:"10px",cursor:"pointer"}}/>

     } 
      </div>
        { add3 &&<>

         <div className="document-text">
              <div className="text">
              <span className="document-index">01</span>
              <span className="document-index-heading">Unique Identification Number (UID) (Aadhaar)<br/><p style={{fontSize:"12px",opacity:".7"}}>(UID) is alphanumeric string that is associated with a single entity within a given system</p></span>
              </div>
         <button className="profile-btn">Upload</button>
         </div>
         <div className="document-text">
              <div className="text">
              <span className="document-index">02</span>
              <span className="document-index-heading">Driving License<br/><p style={{fontSize:"12px",opacity:".7"}}>Issed by the Regional Transport Authorities/Offices (RTA/RTO)</p></span>
              </div>
         <button className="profile-btn">Upload</button>
         </div>
         <div className="document-text">
              <div className="text">
              <span className="document-index">03</span>
              <span className="document-index-heading">Voters Identity Card<br/><p style={{fontSize:"12px",opacity:".7"}}>Issued by the Election Commission of India.</p></span>
              </div>
         <button className="profile-btn">Upload</button>
         
         </div>
         <div className="document-text">
              <div className="text">
              <span className="document-index MORE-OPTIONS">MORE OPTIONS •••</span>
                       </div>
         </div>
         
         
         </>
         
         }
      </div>
      {/* {forth} */}
      <div className="document-cheque">
      <div className="Add-icon">

      <span className="documnet-index-text">ADDRESS PROOF DOCUMENT</span>
      {
       !add4 &&
      <PlusCircle onClick={handleAdd3} color="gray" size={30} style={{marginRight:"20px",marginTop:"10px",cursor:"pointer"}} />
      }
     {
      add4 &&
     <FileMinus onClick={handleAdd3} size={30} style={{marginRight:"20px",marginTop:"10px",cursor:"pointer"}}/>

     } 
      </div>
        { add4 &&<>

         <div className="document-text">
              <div className="text">
              <span className="document-index">01</span>
              <span className="document-index-heading">PAN Card<br/><p style={{fontSize:"12px",opacity:".7"}}>Permanent Account Number issued by the Income Tax Department.</p></span>
              </div>
         <button className="profile-btn">Upload</button>
         </div>
         <div className="document-text">
              <div className="text">
              <span className="document-index">02</span>
              <span className="document-index-heading">Unique Identification Number (UID) (Aadhaar)<br/><p style={{fontSize:"12px",opacity:".7"}}>(UID) is alphanumeric string that is associated with a single entity within a given system</p></span>
              </div>
         <button className="profile-btn">Upload</button>
         </div>
         <div className="document-text">
              <div className="text">
              <span className="document-index">03</span>
              <span className="document-index-heading">Driving License<br/><p style={{fontSize:"12px",opacity:".7"}}>Issed by the Regional Transport Authorities/Offices (RTA/RTO).</p></span>
              </div>
         <button className="profile-btn">Upload</button>
         
         </div>
         <div className="document-text">
              <div className="text">
              <span className="document-index MORE-OPTIONS">MORE OPTIONS •••</span>
                       </div>
         </div>
         
         
         </>
         
         }
      </div>
    </div>
}
        </>
  );
};

export default Profile;
