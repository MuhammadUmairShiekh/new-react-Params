import react from "react"
import { NavLink } from "react-router-dom"


function Card(props) {
    const { images, tittle , price , model ,descrip , btn , btn1} = props

     
    return (
        <div>           
           
            <div className="card">
                <div className="card-image1"> <img src={images} /> </div>
                <div className="category">{tittle}</div>
                <div className="heading"> Price: {price} 
                    <div className="author"> CATEGORY: <span class="name1 ">{descrip}</span></div>
                    <p> {}</p>              
                </div>
                <NavLink className="btn" to={btn}>{btn1}</NavLink>
                
            </div>

        </div>
    )
}

export default Card