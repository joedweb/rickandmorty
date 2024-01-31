import './CharacterList.css'

import { useEffect, useState } from "react";
import Character from "./Character";

const CharacterList = () => {

    const [characters, setCharacters] = useState([])       //useState retruns an array

 useEffect( () => {        //acepts anotehr func as a parameter
async function fetchData(){

    try{                //try block in case link is broken/wrong
  const data = await fetch("https://rickandmortyapi.com/api/character");

              //await is the keyword for a promise. json returns as promise
                      //dont forget "async" to define the function. OFr whenever it gets it, proceed. While not, keep goinf

    const{results} =  await data.json();   //results is what we want from the api
    setCharacters(results)    //updating the list of characters with set
} catch(error){
    console.error("Error fetching data " + error)
}

}

    //lets call the function
fetchData()
  
  }, [characters.length])     //optional for the useEffect. "If length changes, re-run the function"
  



  return (
    <div className = "character-list">
    
        {
      characters.map( (character) => (
        <Character key={character.id} {...character}/>
      )
          )
      }
    </div>
  )
}

export default CharacterList