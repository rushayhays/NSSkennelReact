//an empty madlib
import React, {useState, useEffect} from "react";






export const Madphrase = () => {
    
    const justAnObject = {
        pluralNoun1: "unicorns",
        adjective1: "pretty",
        noun: "street",
        typeOfFood1: "mexican",
        articleOfClothing: "dickey",
        verbEndingIning: "wallowing",
        pluralNoun2: "trees",
        pluralNoun3: "lasers",
        numberVal: "113",
        celebrity: "Taylor Swift",
        color: "golden rod",
        verbEndingIning2: "licking",
        typeOfFood2: "Italian sweets",
        pluralNoun: "concrete shoes",
        adjective2: "gloomy",
        adjective3: "claustrophobic"
    }
    
    let [madLibrary, setmadLibrary] = useState({})

    const letTheMadnessBegin = () => {
        setmadLibrary(justAnObject)
      };
    
    useEffect(() => {
        letTheMadnessBegin();
      }, []);

    return (
        
        <>
            <p>
            Would it surprise you to learn that the most majestic {madLibrary.pluralNoun1} in the world eat garbage?
            </p>
            <p>
             Well, they do! Everything from {madLibrary.adjective1} soda cans to {madLibrary.noun}-stained {madLibrary.typeOfFood1} boxes to used {madLibrary.articleOfClothing} - and more!
             </p>
             <p>
              Some have been spotted {madLibrary.verbEndingIning} dumpsters and then using their long {madLibrary.pluralNoun2} to spear as many bags of {madLibrary.pluralNoun3} as they can before being caught.
            </p>
            <p>
             According to an interview with the {madLibrary.numberVal} Minutes News, {madLibrary.celebrity} once came home to find a/an {madLibrary.color} unicorn {madLibrary.verbEndingIning2} up in the recycling bin. 
             </p>
             <p>
             The poor thing had mistaken leftover {madLibrary.typeOfFood2} for dried up {madLibrary.pluralNoun}. "It was a/an {madLibrary.adjective2} mistake. I am a {madLibrary.adjective3} cook!"
            </p>
        </>
    )
}

