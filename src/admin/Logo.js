import "./logo.css";
import React, { useState } from "react";

export default function Logo() {

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (

                <form className="logo">
                    <h1 className="change">Change Logo</h1>
                    
                    <input className="im" type="file" onChange={handleChange} />
                    <img className="pic1" src={file} alt="" height={100} width={100}/>
                    <button className="cha">Change</button>
  
      
                    
                </form>
    )
}


