import React from "react"
import Card from "../components/Card"
import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"


function Portfolio() {
    const [phos, setPhotos] = useState()
    useEffect(() => {
        fetch("https://private-anon-7332df5736-carsapi1.apiary-mock.com/manufacturers")
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
                <Card tittle={item.name} price={Math.round(item.avg_price) + " $"} model={item.num_models} images={item.img_url}
                    power={Math.round(item.avg_horsepower)} btn1={ "Car detail "  + item.id}
                    btn={("/portfolio/") + item.id} 
                    
                      />
              
                </>
            })}

        </div>
    )
}

export default Portfolio


{/* <Card images={"https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"} 
tittle="Rs: 63,000"
/> */}