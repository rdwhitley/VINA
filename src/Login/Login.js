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
import Bg1 from'../assets/background1.png';
const Login = () => {
    return <div style={{width: "100vw", marginTop: "2em", border: "2px solid red", margin: "0 auto", backgroundImage: `url(${Bg1})`}}>
    <h3 style={{color: "white"}}>Login</h3>
    <form className="card" style={{marginLeft: "auto", marginRight: "auto", backgroundColor: "#adb9c7", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)", width: "50vw",padding: ""}}>
    
    <Col style={{width: "50vw", margin: "0 auto", color: "#465c76"}}>
    <div style={{margin: "0 auto", border: "2px solid", display: "flex", flexDirection: "column"}}>
    <div style={{margin: "0 auto"}}>
    <label for="Username" style={{marginBottom: "1em"}}>Username: </label>
    <MDBInput className='mb-4' type='Username' id='Username' style={{backgroundColor: "white", width: ""}}/>
    </div> 

    <div style={{margin: "0 auto"}}>
    <label for="Username" style={{marginBottom: "1em"}}>Password: </label>
    <MDBInput className='mb-4' type='password' id='form2Example2' style={{backgroundColor: "white", marginRight: "", width: ""}}/>
    </div>
    </div>
    
    <div style={{display: "flex"}}>
    <div type="button" className="" style={{marginLeft: "1em"}}>Need Help?</div>
    <button type="button" className="btn btn-rounded" style={{marginLeft: "auto",backgroundColor: "#6a727a", color: "white", marginBottom: "1em", marginRight: "1em"}}>Login</button>
    </div>
    </Col>
  </form>
  </div>
};

export default Login;
