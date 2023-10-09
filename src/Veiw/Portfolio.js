import React from "react"
import Card from "../components/Card"
import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"


function Product() {
    const [phos, setPhotos] = useState()
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(res => setPhotos(res))

    }, [])

    

    if (!phos) {
        return <div className='loader' ></div>
    }
    return (
        <div className="main" >
            {phos.map(item => {
                return <>
                <Card tittle={item.title} price={Math.round(item.price) + " $"} model={item.num_models} images={item.image}
                    descrip={item.category} btn1={ "Product Detail "  + item.id}
                    btn={("/product/") + item.id} 
                    
                      />
              
                </>
            })}

        </div>
    )
}

export default Product


{/* <Card images={"https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"} 
tittle="Rs: 63,000"
/> */}