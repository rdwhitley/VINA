import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import {Container,Row,Col, Navbar} from  "react-bootstrap";
const Login = () => {
    return <div style={{width: "70vw", marginTop: "2em", border: "2px solid red", backgroundColor: "blue"}}>
    <h3 style={{color: "white"}}>Login</h3>
    <form className="card" style={{backgroundColor: "#adb9c7", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)"}}>
    
    <Col style={{width: "50vw", margin: "0 auto", color: "#465c76"}}>
    <div style={{margin: "0 auto"}}>
    <label for="Username" >Username: </label>
    <MDBInput className='mb-4' type='Username' id='Username' style={{backgroundColor: "white"}}/>
    </div>

    <div style={{margin: "0 auto"}}>
    <label for="Username">Password: </label>
    <MDBInput className='mb-4' type='password' id='form2Example2' style={{backgroundColor: "white"}}/>
    </div>
    
    <div style={{display: "flex"}}>
    <div type="button" className="">Need Help?</div>
    <button type="button" className="btn btn-rounded" style={{marginLeft: "auto",backgroundColor: "#6a727a", color: "white", marginBottom: "1em"}}>Login</button>
    </div>
    </Col>
  </form>
  </div>
};

export default Login;
