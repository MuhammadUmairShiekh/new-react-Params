import React from "react";
import { useParams ,NavLink } from "react-router-dom";
import { useState , useEffect } from "react";
import Detail from "../components/Detail"


function ProductDetails (){
    const [prodc , setProdc] = useState ()
    const {id} = useParams()
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/' + id)
        .then(res => res.json())
        .then(res => setProdc(res))
    },[])
    if(!prodc){
        return <div className='loader' ></div>
      }
     console.log(prodc.category)
     
    return(
        <div>
        < NavLink className="btnn" to={"/product"} >Go Back</NavLink>
        <h1 className="tag" >{prodc.category}</h1>
        <h1 className="tag" >{prodc.count}</h1>
        <p>{prodc.count}</p>
         <Detail price={Math.round(prodc.price) + " $"}  images={prodc.image} tittle={prodc.title} 
            descrip={prodc.description}
         />

        </div>
        )
}

export default ProductDetails