import { Link } from "react-router-dom";
import { useContext } from "react";
import {GlobalContext} from "./App.js"
export function Navigation(){
    const {globalCount}=useContext(GlobalContext);
    return(
        // <div>
        //     <Link to="/" >Home</Link>
        //     <Link to="/products" >Products</Link>
        //     <Link to="/product">Product</Link>
        // </div>
        <div style={{display:"flex",flexDirection:"row",
            justifyContent:"space-between",background:"#e5e5e5",padding:"15px"}}>
            <div style={{display:'flex', gap:'10px',cursor:'pointer'}}>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </div>
            <div style={{display:'flex', gap:'10px',cursor:'pointer'}}>
                <Link to="/cart">Cart({globalCount})</Link>
                <Link to="/profile">Profile</Link>
            </div>
        </div>
    );
}