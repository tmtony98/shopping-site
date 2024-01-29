import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';


function ProductView() {

const {id}=useParams();

const[product,setProduct] =useState(1)
useEffect(()=>{
    fetchData()
    },[])

    const fetchData = async () => {
        try {
          const response = await axios.get("https://dummyjson.com/products/"+id);

          setProduct(response.data)
         // setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  return (
    <div>
         <section class="py-5">
 
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">   
                    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src={product.thumbnail} alt="..." /></div>
                    <div class="col-md-6">
                        <div class="small mb-1">{product.category}</div>
                        <h1 class="display-5 fw-bolder">{product.title}</h1>
                        <div class="fs-5 mb-5">
                            <span class="text-decoration-line-through px-3">{product.price} Rs</span>
                            <span>{product.price - (product.price * (product.discountPercentage/100)) }Rs</span>
                        </div>
                        <p class="lead">Brand - {product.brand}</p>
                        <p class="lead">Description - {product.description}</p>
                        <p className=''>Rating - {product.rating}</p>
                            <p > Current stock-{product.stock}</p>
                        <div class="d-flex">
                            {/* <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1"  /> */}
                           <NavLink style={{textDecoration:"none"}} to={"/signup"}>
                           <button class="btn btn-outline-dark flex-shrink-0" type="button">
                                <i class="bi-cart-fill me-1"></i>
                                Buy now
                            </button>
                           </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    </div>
  )
}

export default ProductView
