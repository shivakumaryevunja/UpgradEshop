import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid'
import { useEffect } from 'react'
// import { useState } from 'react';

const ProductCard = () => {
    let productData;
    useEffect(() => {
        fetchProduct();
    }, [])
    
    const [products, setUsers] = useState([]);
    const fetchProduct = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/v1/products");
            const data = await response.json();
            console.log(data[0].name);
            productData = data;
            return data[0];
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <Grid item xs={3}>
            <Card sx={{ maxWidth: 280 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={fetchProduct.imageURL}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {fetchProduct.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {fetchProduct.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
        </Grid>
    )
}

export default ProductCard