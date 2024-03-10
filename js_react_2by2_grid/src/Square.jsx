import { useState } from "react";
import "./index.css"; 

export default function Square({onClick, decrementVal, incrementVal}) {

    const [currBool, setBool] = useState(false); 
    let squareColor = "square backColor"; 

    if(currBool == false){
        squareColor = "square backColor"; 
        
    } else {
        squareColor = "square backColorClicked"; 
    }
 
    const handleClick = () => {
        setBool(!currBool); 
        if(currBool){
            decrementVal(); 
        }else{
            incrementVal(); 
        }
        onClick(); 
    }; 


    return (
        <div>
            <div className={squareColor} onClick={handleClick}></div>
        </div>
    )
}
