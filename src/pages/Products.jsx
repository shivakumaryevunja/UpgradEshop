import React from 'react'
import Navbaruser from '../Components/Navbaruser'
import ProductCategory from '../Components/ProductCategory';
import ProductCard from './ProductCard';
import Grid from '@mui/material/Grid'


const Product = () => {
  
  return (
    <div>
        <Navbaruser />
        <ProductCategory />
        <Grid container spacing={3} marginTop={1} marginLeft={2}>
        {/* {fetchProduct.product.map((product, index)=>(
             
          ))} */}
          <ProductCard  />
        </Grid>
    </div>
  )
}

export default Product;