import { Select,MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import './App.css';
function Header(){

    const [value,setValue] = useState("");

    return <div style={{background: "black", color: "white", display: "flex", justifyContent: "space-around", height: "8vh", alignItems: "center"}}>
      
        <Link to={"/"} style={{ textDecoration: 'none', color: 'inherit' }}><div style={{color: "gold", fontWeight:"bold", cursor: "pointer",fontSize:"25px"}}>Crypto View</div></Link>
    
     
     <div style={{display:"flex", justifyContent:"center", alignItems:"center", boxSizing:"border-box",overflow:"hidden"}}>
        <TextField id="outlined-basic" style={{background:"white",height:"5vh", textDecoration:"none",boxDecorationBreak:"none", display:"flex", alignItems:"center", justifyContent:"center"}} onChange={(e)=>{
            setValue(e.target.value);
            console.log('afterr',value);
        }}></TextField>
     
        <Button variant="contained" onClick={()=>{
            if(value !== "") window.location=`/search/${value}`
           }}>Serach</Button>
    </div>
        {/* <div style={{color: "gold", fontWeight:"bold", cursor: "pointer"}}>Price</div> */}
    </div>
}

export default Header;