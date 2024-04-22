import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Avatar, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const paperStyle = { padding: '30px 20px', width: 400, margin: '20px auto' }
    const avatarStyle = { backgroundColor: '#8dc967' }
    const formStyle = { margin: '10px' }
    //handling the input data
    
    const [email, emailChange] = useState("");
    const [password, passwordChange] = useState("");

    const usenavigate = useNavigate();
//handling login event
    const proceedLogin = (e)=>{
        e.preventDefault();
        let regobj = {email, password};
        if(Validate()){
         //after clicking login
         fetch("http://localhost:3001/api/v1/auth", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('Registered successfully.')
                console.log(res.body);
                usenavigate('/product')
            }).catch((err) => {
                toast.error('Failed:' + err.message);
            });
        }
    }
    const Validate = ()=>{
        let result = true;
        if(email === null || email === ""){
            result = false;
            toast.warning("Please enter Email-id");
        }
        if(password === null || password === ""){
            result = false;
            toast.warning("Please enter Password");
        }
        return result;
    }
    //handling the form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        

    }
    return (
        <Grid marginTop={10}>
            <Paper elevation={20} style={paperStyle} >
                <div>
                    <IconButton
                        edge="end"
                        color="inherit"
                        href='./'
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Grid align='center' marginBottom={3}>
                        <Avatar style={avatarStyle}>
                            <LoginIcon />
                        </Avatar>
                        <h2>Sign In</h2>
                    </Grid>

                    <form style={formStyle} onSubmit={proceedLogin}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: "20px" }}>
                            <TextField
                                fullWidth
                                label='Email Id'
                                variant="outlined"
                                placeholder='Enter the email id'
                                autoComplete='off'
                                name='username'
                                value={email}
                                onChange={e=> emailChange(e.target.value)}
                                
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: "20px" }}>
                            <TextField id="password"
                                label="Password"
                                variant="outlined"
                                fullWidth
                                type="password"
                                placeholder='Enter the password'
                                autoComplete='off'
                                name='password'
                                value={password}
                                onChange={e=>passwordChange(e.target.value)}
                               
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: "30px" }}>
                            <Button type='submit' variant="contained" fullWidth>Sign In</Button>
                           
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: "10px", padding:'10px' }}>
                        <Button href="./register" variant="outlined">New User</Button>
                        </div>
                    </form>
                </div>
            </Paper>
        </Grid>
    )
}

export default Login