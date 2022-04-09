import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import Logo from '../assets/VINA.svg';
import {Container,Row,Col, Navbar} from  "react-bootstrap";
const Footer = () => {
    return <div style={{textAlign: "center", border: "2px solid",backgroundColor: "#6a727a"}}> 
        <h2>Contact:</h2>
        <p>Lorem ipsum</p>
        <h2>Address:</h2>
        <p>Lorem ipsum</p>
        <img src={Logo} style={{height: "100px", width: "100px"}}/>
        <p>CopyRights: Kyle Hampton 2022</p>
    </div>
};

export default Footer;
