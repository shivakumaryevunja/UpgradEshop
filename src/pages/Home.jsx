import React from 'react'
import NavBar from '../Components/Navbar'
import { Box } from '@mui/material'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Box 
        marginTop={40}
        display="flex"
        alignItems="center"
        justifyContent="center" 
        component="section"
        sx={{ p: 1, border: '1px dashed grey' }}>
        <h1>Welcome to Home Page</h1>
      </Box>
    </div>
  )
}

export default Home