import React from "react";
import './heading.css';

function Heading(props){
    return(
        <>
            <div className= "heading">
                <h1>{props.heading}</h1>
                <button>Back</button>
            </div>
        </>
    )
}

export default Heading;