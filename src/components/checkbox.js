import React, {useState} from "react";

export const Checkbox = () => {
    
    let [checkedState, setCheckedState] = useState(true)

    // const handleChange = () => {
    //     if(checkedState === true){
    //         const newCheckedState = false
    //         setCheckedState(newCheckedState)
    //     } else {
    //         const newCheckedState = true
    //         setCheckedState(newCheckedState)
    //     }
        
    // }

    //This is more concise
    // const handleChange = () => {
    //     if(checkedState === true){
    //         setCheckedState(false)
    //     } else {
    //         setCheckedState(true)
    //     }
        
    // }

    //The most concise
    const handleChange = () => {
        checkedState?setCheckedState(false):setCheckedState(true)  
    }

    
    
    return(
        <>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked={checkedState} onChange={handleChange} />
            <label for="vehicle1"> I have a bike</label><br/>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
            <label for="vehicle2"> I have a car</label><br/>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
            <label for="vehicle3"> I have a boat</label><br/>
        </>

    )

}