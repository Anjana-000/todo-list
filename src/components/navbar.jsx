import {Link} from "react-router-dom";
const Navbar =() =>{
    return (
        <nav className="navbar">
<Link to = {"/"}> Task</Link>
<Link to ={"/about"}>About</Link>
        </nav>
    )
}
export default Navbar;