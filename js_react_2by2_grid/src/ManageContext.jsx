import { createContext, useState } from "react"

// our context manager 
export const AllContext = createContext(); 

export function ManageContextProvider(props){
    const [currVal, setCurrVal] = useState(0); 


    return(
        <AllContext.Provider value={[currVal, setCurrVal]}>
            {props.children}
        </AllContext.Provider>
    )

}

