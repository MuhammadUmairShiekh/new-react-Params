import Reonact from "react"
import { NavLink } from "react-router-dom"


function Card(props) {
    const { images, tittle , price , model ,power , btn , btn1} = props

     
    return (
        <div>           
           
            <div className="card">
                <div className="card-image"> <img src={images} /> </div>
                <div className="category">{tittle}</div>
                <div className="heading"> {price}
                    <div className="author"> Model Year <span class="name">{model}</span></div>
                    <p>Horse Power {power}</p>
                    <NavLink className="btn" to={btn}>{btn1}</NavLink>
                   

                </div>
            </div>

        </div>
    )
}

export default Card