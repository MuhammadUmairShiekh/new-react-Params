import { Outlet , NavLink } from "react-router-dom";    

function Mainheader() {
    return (
        <>
            <div className="nav" >

                <ul>
                    <li className="logo" >L<span>o</span>go</li>  
                    <li>
                        <NavLink to="/Home"  className="list" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"} className="list" >About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"} className="list">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/product"} className="list" >Product</NavLink>
                    </li>

                </ul>
            </div>
            <Outlet />  
           

        </>
    )
}

export default Mainheader

