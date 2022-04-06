import React, {useState} from "react";
import { Checkbox } from "./checkbox";

export const PropsAndState = ({ nameHere }) => {
    let [countClicks, setCountClicks] = useState(0)

    const handleClick = () => {
        const newCountClicks = ++countClicks
        setCountClicks(newCountClicks)
    }

    return (
        <>
            <h3>Welcome, {nameHere}</h3>
            <p>{countClicks}</p>
            <button onClick={(handleClick)}>Click Me</button>
            
        </>
            )
}