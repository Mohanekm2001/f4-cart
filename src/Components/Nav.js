import { NavLink } from "react-router-dom";

const Nav=()=>{
    return(
        <div className="nav">
            <div>
            <h1>Shopping Cart</h1>
            </div>
            
            <div>
                <NavLink to='/'>HomePage</NavLink>
                <NavLink to='/cart'>CartPage</NavLink>
            </div>
        </div>
    )
}
export default Nav;