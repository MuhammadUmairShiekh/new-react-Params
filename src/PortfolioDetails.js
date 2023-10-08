import React from "react";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";

function PortfolioDetails (){
    const [portfo , setPorfo] = useState ()
    const {id} = useParams()
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
        .then(res => res.json())
        .then(res => setPorfo(res))
    },[])
    if(!portfo){
        return <div className='loader' ></div>
      }

    return(
        <div  >
            <h1>Detail Page</h1>

        {portfo.map(item =>{
            return <div className="detail" >
         <h3>{item.title}</h3>
        <img src={item.thumbnailUrl} width="50%" />
            </div>
        })}
        </div>
    )
}

export default PortfolioDetails