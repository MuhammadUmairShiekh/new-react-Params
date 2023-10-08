import { Outlet , NavLink } from "react-router-dom";    

function Mainheader() {
    return (
        <>
            <div className="nav" >

                <ul>
                    <li className="logo" >Logo</li>  
                    <li>
                        <NavLink to="/"  className="list" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"} className="list" >About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"} className="list">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/portfolio"} className="list" >Portfolio</NavLink>
                    </li>

                </ul>
            </div>
            <Outlet />  
           

        </>
    )
}

export default Mainheader

