import { AppBar, Box, Button, Card, CardActionArea, CardContent, CardMedia, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Menu({categories}) {
    const [dishes,setDishes] = React.useState([])
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor:'purple',color:'white'}}>
            <Toolbar sx={{display:'flex',justifyContent:'center'}}>
            <Link style={{color:'white'}} to="/">
                <Button sx={{width:'150px',fontWeight:'bold',fontSize:'25px'}} color="inherit">Back</Button>
            </Link>
            <Typography variant="h3" component="div" sx={{width:'95%',textAlign:'center',fontWeight:'bold'}}>
                Yammi
            </Typography>
            </Toolbar>
        </AppBar>
        </Box>
        <div class="container">
            <div class="Categories">
                {
                    categories.map(category=>
                        <Card class="categoryCard">
                            <Link to="#" style={{textDecoration:'none'}} onClick={()=>setDishes(category.dishes)}>
                            <CardActionArea sx={{display:'flex',flexDirection:'column'}}>
                                <CardMedia sx={{height:'200px',borderRadius:'20px'}}
                                component="img"
                                image={`static/${category.image}`}
                                />
                                <Typography sx={{color:'black',fontWeight:'bold',fontSize:'30px'}} variant="h5" component="div">
                                    {category.name}
                                </Typography>
                            </CardActionArea>
                            <CardContent>
                            </CardContent>
                            </Link>
                        </Card>
                    )   
                }
            </div>
            <div class="Menu"> 
                {
                    dishes.map(dish=>
                        <Card class="dishCard">
                        <CardActionArea sx={{height:'200px'}}>
                          <CardMedia
                            sx={{height:'200px',borderRadius:'20px'}}
                            component="img"
                            image={`static/${dish.image}`}
                          />
                          <CardContent sx={{display:'flex',flexDirection:'column',gap:'10px',height:'170px',justifyContent:'space-between'}}>
                            <Typography sx={{fontWeight:'bold'}} gutterBottom variant="h5" component="div">
                              {dish.name}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {dish.description}
                            </Typography>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                            <Typography sx={{fontWeight:'bold',fontSize:'20px'}}>
                                {dish.price}₪
                            </Typography>
                            <Typography sx={{fontWeight:'bold',fontSize:'20px'}}>
                                Gluten Free {dish.is_gluten_free ? <span style={{color:'green'}}>V</span> : <span style={{color:'red'}}>X</span>}
                            </Typography>
                            <Typography sx={{fontWeight:'bold',fontSize:'20px'}}>
                                Vegeterian {dish.is_vegeterian ? <span style={{color:'green'}}>V</span> : <span style={{color:'red'}}>X</span>}
                            </Typography>
                            </div>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                      )
                }
            </div>
        </div>
    </div>
  )
}

export default Menu