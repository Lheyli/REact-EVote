import "./dash.css";
import React, { useState } from "react";

export default function Dashboard() {

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div>
            <br></br><br></br><br></br><br></br>
            <form className="f1">
            <h1 className="voting">Voting Status</h1>
            <br></br> <br></br>
            <p className="p1"> No Data Available</p>
            <br></br>
            <p className="p2">Soon Data will be available when election process is started.</p>
            <br></br> 
                <div className="Start">Start <p className="p3">Click on Start button to start election process.</p></div>
                <div className="Stop">Stop <p className="p3">Click on Stop button to stop election process.</p></div>
                
               
            </form>
            <div>
                <form className="f2">
                    <h1 className="code">Code Generator</h1>
            
                    <button className="generate">Generate</button>
                    <p className="p9"> * Do not share this code with anyone!</p>
                </form>
                <form className="f3">
                    <h1 className="candidates">Candidates</h1>
                    <input className="nm" type="text"  name="Name" placeholder="Name" /> 
                    <input className="position"  type="text"  name="Position" placeholder="Position" />
                    <input className="Image" type="file" onChange={handleChange} />
                    <img className="pic" src={file} alt="" height={100} width={100}/>
                    <button className="Add">Add +</button>
  
      
                    <p className="p11 ">No candidates are available right now </p>
                </form>
            </div>
        </div>
    )
}


/*
return (
    <div>
)



//pre es6
export default function About() {
    return
}


const About = () => {

}


export default About;





//auto return 
() => <div></div>?
*/
