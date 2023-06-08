import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div class="background">
      <div class="Main">
        <Typography variant="h1" sx={{fontWeight:'bold',color:'white',textShadow: '5px -10px 5px black'}}>Welcome To Yammi</Typography>
        <Link style={{textDecoration:'none'}} to="/menu"><Button
        sx={{borderRadius:'10px',backgroundColor:'#fce4ec',height:'100px',width:'100%',fontSize:'30px',color:'black',fontWeight:'bold'}}
        variant="contained">Go To Menu</Button></Link>
      </div>
    </div>
  )
}

export default Welcome