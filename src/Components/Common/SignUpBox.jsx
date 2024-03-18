import React, { useEffect, useState } from 'react';
import './SignUpBox.css';
import axios from 'axios';
import {BASE_URL}from '../../Constants/constants';
import { createBrowserHistory } from 'history';



import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

const history = createBrowserHistory();


function SignUpBox({setBoxName}){
  
  const history = createBrowserHistory();

  const handleLogin=()=>{
    setBoxName('login')
}
const [signUpData,setSignUpData]=useState(
  { 
    fName:'',
    lName:'',
    email:'',
    password:'',
    confirmPassword:'',
    })
    const [errors, setErrors] = useState({});

    useEffect(()=>{
      console.log(signUpData);
    },[signUpData])
    
      
    
  
 /*const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');

 const [error, setError] = useState('');*/

 const validateForm = () => {
  let newErrors = {};

  // Add your validation logic here
  if (signUpData.fName.trim() === '') {
    
  }

  if (signUpData.lName.trim() === '') {
    
    alert('fill required field')
  }

  if (signUpData.email.trim() === '') {
    
    alert('enter valid mail')
  } else if (!/^\S+@\S+\.\S+$/.test(signUpData.email)) {
    newErrors.email = 'Email is invalid';
    alert('invalid email')
  }

  if (signUpData.password.trim() === '') {
    newErrors.password = 'Password is required';
  } else if (signUpData.password.length < 8) {
    alert('password is weak')
  }

  if (signUpData.confirmPassword.trim() === '') {
    alert('vhvmh')
  } else if (signUpData.confirmPassword !== signUpData.password) {
    newErrors.confirmPassword = 'Passwords do not match';
    alert('password does not match')
  }

  setErrors({ ...newErrors });
  return Object.keys(newErrors).length === 0;
};

              

      
      // Add other validation rules for lName, email, password, and confirmPassword

  

      const handleRegister = async () => {
        if (!validateForm()) {
          return;
        }
      
        try {
          const res = await axios.post(`${BASE_URL}/auth/signUp`, signUpData);
          console.log(res);
          history.push(setBoxName)
          {
            const handleLogin=()=>{
              setBoxName('login')
          }
          }; // Redirect to the login page
          // Handle success (e.g., redirect or show a success message)
        } catch (error) {
          if (error.response && error.response.status === 409) {
            // User already exists (status code 409 Conflict)
            alert('User with this email already exists!');
            setSignUpData({
              fName: '',
              lName: '',
              email: '',
              password: '',
              confirmPassword: ''
            });
          } else {
            console.error('Error during signup API call:', error);
            // Handle other errors (show a message to the user or log it)
          }
        }
      };
      
 return (
  <MDBCol md='6' >
 <MDBCard className='my-5 bg-glass mt-0 '>
 <MDBCardBody className='p-5 '>
 <MDBRow>
  <MDBCol col='4'>
    <MDBInput
      wrapperClass='mb-4'
      label='First name'
      id='form1'
      type='fName'
      value={signUpData.fName}
      onChange={(e) => { setSignUpData({ ...signUpData, fName: e.target.value }); }}
    />
  </MDBCol>

  <MDBCol col='4'>
    <MDBInput
      wrapperClass='mb-4'
      label='Last name'
      id='form2'
      type='lName'
      value={signUpData.lName}
      onChange={(e) => { setSignUpData({ ...signUpData, lName: e.target.value }); }}
    />
  </MDBCol>
</MDBRow>

<MDBInput
  wrapperClass='mb-4'
  label='Email'
  id='form3'
  type='email'
  value={signUpData.email}
  onChange={(e) => { setSignUpData({ ...signUpData, email: e.target.value }); }}
/>
<MDBInput
  wrapperClass='mb-4'
  label='Password'
  id='form4'
  type='password'
  value={signUpData.password}
  onChange={(e) => { setSignUpData({ ...signUpData, password: e.target.value }); }}
/>
<MDBInput
  wrapperClass='mb-4'
  label='Confirm Password'
  id='form5'
  value={signUpData.confirmPassword}
  type='password'
  onChange={(e) => { setSignUpData({ ...signUpData, confirmPassword: e.target.value }); }}
/>
   

   <MDBBtn className='w-100 mb-4' size='md'onClick={handleRegister}>sign up</MDBBtn>

   <div className="text-center">
  
<p><span onClick={handleLogin}>go to login</span> </p>
    
     <p>or sign up with:</p>
    
   </div> 

 </MDBCardBody>
</MDBCard>

</MDBCol>
 );
 }
 
export default SignUpBox;