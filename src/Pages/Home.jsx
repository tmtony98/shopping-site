import React, { useEffect } from 'react'
import Header from '../components/Header'
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    //js 
    const [searchResults, setSearchResults] = useState([]);
    const [searchText,setSearchText] = useState("")

    const handleInputChange = (e) => {
        const query = e.target.value;
        setSearchText(query);
      };
  
      const fetchData = async () => {
        try {
          const response = await axios.get("https://dummyjson.com/products/search?q="+searchText);
          setSearchResults(response.data.products)
         // setData(response.data);
          console.log(response.data.products);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      useEffect(() => {
        fetchData();  
      },[])

  return (
    <div>
      <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                    <p class="lead mt-3 mb-3 fw-normal text-white-50 mb-0">Search Products Here</p>
                    <input    style={{ width: '300px', height: '40px', fontSize: '16px' }}  className='' type="text" placeholder='Search Product here' value={searchText} onChange={handleInputChange} />
                  <button  className='btn btn-primary mx-2 ' onClick={()=>fetchData()}>Search</button>
                </div>
            </div>
        </header>
       <div>
            <h2 className='text-primary fw-bold text-center p-5'>Product List</h2>
        <div className="container">
            <div className="row">
            {searchResults.map(product => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card text-center p-2">
            <Link  style={{textDecoration:"none"}}  to={`/products/${product.id}`}>
            <img 
                src={product.thumbnail}
                alt={product.image}
                className="card-img-top"
                style={{ height: '200px', width:"200px", objectFit: 'cover' }}
              />

            </Link>

              
              <div className="card-body ">
                <h5 className="card-title fw-bold">{product.title}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Rating: {product.rating}</p>
                <p className="card-text">Brand: {product.brand}</p>
              </div>
            </div>
          </div>
        ))}
            </div>
        </div>

     </div>
    </div>
  )
}

export default Home
