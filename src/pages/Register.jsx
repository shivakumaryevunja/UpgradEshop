import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Avatar, TextField } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const paperStyle = { padding: '30px 20px', width: 400, margin: '20px auto' }
  const avatarStyle = { backgroundColor: '#8dc967' }
  const formStyle = { margin: '10px' }

  //handling input data
  const [firstName, firstNameChange] = useState("");
  const [lastName, lastNameChange] = useState("");
  const [email, emailChange] = useState("");
  const [password, passwordChange] = useState("");
  const [contactNumber, phoneChange] = useState("");

  const navigate = useNavigate();

  const isValid = () => {

    let isProcessed = true;
    let errorMessage = 'Please enter the value in ';

    if (firstName === null || firstName === '') {
      isProcessed = false;
      errorMessage += 'Name, ';
    }
    if (lastName === null || lastName === '') {
      isProcessed = false;
      errorMessage += 'Name, ';
    }
    if (email === null || email === '') {
      isProcessed = false;
      errorMessage += 'Email-id, ';
    }
    if (contactNumber === null || contactNumber === '') {
      isProcessed = false;
      errorMessage += 'Phone, ';
    }
    if (password === null || password === '') {
      isProcessed = false;
      errorMessage += 'Password';
    }

    if (!isProcessed) {
      toast.warning(errorMessage);
    } else {
      if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)) {

      } else {
        isProcessed = false;
        toast.warning('Please enter the valid email.');
      }
      if (/[0-9]{10}$/.test(contactNumber)) {

      } else {
        isProcessed = false;
        console.log(contactNumber);
        toast.warning('Please enter the valid Phone number.');
      }
      if (/[0-9]{8}$/.test(password)) {

      } else {
        isProcessed = false;
        console.log(password);
        toast.warning('Please enter the valid Password.');
      }
    }
    return isProcessed;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let regobj = { firstName,lastName, email, contactNumber, password };
    // console.log(regobj);
    if (isValid()) {
      fetch("http://localhost:3001/api/v1/users", {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(regobj)
      }).then((res) => {
        toast.success('Registered successfully.')
        navigate('/login')
      }).catch((err) => {
        toast.error('Failed:' + err.message);
      });
    }
  }
  return (
    <Grid marginTop={10}>
      <Paper elevation={20} style={paperStyle} >
        <IconButton
          right='400px'
          color="inherit"
          href='./'
          aria-label="close"
        >
          <CloseIcon edge='end' />
        </IconButton>
        <Grid align='center' marginBottom={3}>
          <Avatar style={avatarStyle}>
            <PersonAddIcon />
          </Avatar>
          <h2>Sign Up</h2>
        </Grid>
        <form style={formStyle} onSubmit={handleSubmit}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: "20px" }}>
            <TextField
              fullWidth
              label='First Name'
              placeholder='Enter the firstName'
              name='username'
              value={firstName}
              onChange={e => firstNameChange(e.target.value)}

            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: "20px" }}>
            <TextField
              fullWidth
              label='Last Name'
              placeholder='Enter the lastName'
              name='username'
              value={lastName}
              onChange={e => lastNameChange(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: "20px" }}>
            <TextField
              fullWidth
              label='Email Id'
              placeholder='Enter the email id'
              name='email'
              value={email}
              onChange={e => emailChange(e.target.value)}

            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: "20px" }}>
            <TextField
              fullWidth
              label='Phone'
              placeholder='Enter the phone'
              name='phone'
              value={contactNumber}
              onChange={e => phoneChange(e.target.value)}

            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: "20px" }}>
            <TextField fullWidth
              label='Password'
              placeholder='Enter the password'
              name='password'
              value={password}
              onChange={e => passwordChange(e.target.value)}

            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: "20px" }}>
            <Button type='submit' variant="contained" fullWidth>Sign Up</Button>
          </div>
        </form>
      </Paper>
    </Grid>
  )
}

export default Register;