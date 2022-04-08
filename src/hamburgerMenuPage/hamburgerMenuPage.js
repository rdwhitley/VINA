import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer
} from 'mdbreact';
// import { BrowserRouter as Router } from 'react-router-dom';

class hamburgerMenuPage extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));
  };

  render() {
    return (
        <div>
        <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
      data-mdb-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
      aria-expanded="false" aria-label="Toggle navigation">
      <i className="fas fa-bars"></i>
    </button>
  </div>
</nav>
<div className="collapse" id="navbarToggleExternalContent">
  <div className="bg-light shadow-3 p-4">
    <button className="btn btn-link btn-block border-bottom m-0">Link 1</button>
    <button className="btn btn-link btn-block border-bottom m-0">Link 2</button>
    <button className="btn btn-link btn-block m-0">Link 3</button>
  </div>
</div>
</div>
    );
  }
}

export default hamburgerMenuPage;