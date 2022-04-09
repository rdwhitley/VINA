import React from "react";
import {Container,Row,Col, Navbar} from  "react-bootstrap";
// import * from "bootstrap";
import Hamburger from "../hamburgerMenuPage/hamburgerMenuPage.js";
import Login from "../Login/Login.js";
const App = () => ( 
<Container>
    <Row className="d-flex">
        
        <div className="d-flex flex-row-reverse">
        {/* <Navbar expand={false} bg="dark" variant="dark" fixed="top" collapseOnSelect/> */}
        <Hamburger />
        </div>
    </Row>
    <Row className="justify-content-center">
        <Login/>
    </Row>
    </Container>
);

export default App;
