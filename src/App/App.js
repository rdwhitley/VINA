import React from "react";
import {Container,Row,Col, Navbar} from  "react-bootstrap";
// import * from "bootstrap";
import Hamburger from "../hamburgerMenuPage/hamburgerMenuPage.js";
import Login from "../Login/Login.js";
import SignUp from "../SignUp/SignUp";
const App = () => ( 
<Container>
    <Row className="d-flex">
        
        <div className="d-flex flex-row-reverse">
        {/* <Navbar expand={false} bg="dark" variant="dark" fixed="top" collapseOnSelect/> */}
        <Hamburger />
        </div>
        <Login style={{border: "2px solid"}}/>
        <SignUp />
    </Row>
    </Container>
);

export default App;
