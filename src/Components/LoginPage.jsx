import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Avatar, TextField } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';

const LoginPage = () => {
    const paperStyle = { padding: '30px 20px', width: 400, margin: '20px auto' }
    const avatarStyle = { backgroundColor: '#8dc967' }
    const formStyle = {margin: '10px'}
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle} >
                <Grid align='center' marginBottom={3}>
                    <Avatar style={avatarStyle}>
                        <PersonAddIcon />
                    </Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form style={formStyle}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: "30px" }}>
                        <TextField fullWidth label='Email Id' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: "30px" }}>
                        <TextField id="password"
                            label="Password *"
                            variant="outlined"
                            fullWidth
                            type="password"
                        //    value={formData.password.value}
                        //    onChange={(event) => saveOnChange("password", event.target.value)}
                        //    onBlur={(event) => validateAndSaveInMemory("password", event.target.value)}
                        //    error={formData.password.error}
                        //    helperText={formData.password.error && formData.password.errorMessage}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: "30px" }}>
                    <Button variant="contained" fullWidth>Sign In</Button>
                    </div>
                </form>
            </Paper>
        </Grid>
    )
}

export default LoginPage;