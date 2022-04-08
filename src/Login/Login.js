import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
const Login = () => {
    return <form style={{border: "2px solid red", width: "50%", marginTop: "2em"}}>
    <MDBInput className='mb-4' type='Username' id='Username' label='Username' />
    <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' />

    <MDBRow className='mb-4'>
      
<button type="button" class="btn btn-primary">Need Help</button>

<button type="button" class="btn btn-primary">Login</button>
        Login
    </MDBRow>
  </form>
};

export default Login;
