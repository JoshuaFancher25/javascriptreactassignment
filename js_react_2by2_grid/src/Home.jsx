import { useContext } from "react"; 
import { AllContext } from "./ManageContext"; 
import Square from "./Square";
import "./index.css"; 



export default function Home() {

    const [currVal, setCurrVal] = useContext(AllContext);

    function incrementVal() {
        const newVal = currVal + 1;     
        setCurrVal(newVal)
    }

    function decrementVal() {
        const newVal = currVal - 1;
        setCurrVal(newVal)
    }

    return (
        <div>
            <div><span id="span">Count:{currVal}</span></div>
         
            <div className="container">
                <Square incrementVal={incrementVal} decrementVal={decrementVal}/>
                <Square incrementVal={incrementVal} decrementVal={decrementVal}/>
                <Square incrementVal={incrementVal} decrementVal={decrementVal}/>
                <Square incrementVal={incrementVal} decrementVal={decrementVal}/>
            </div>


        </div>
    )
}
