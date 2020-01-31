import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./component/CharacterCard"

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ characters, setCharacters ] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get('https://rickandmortyapi.com/api/character/')
    .then(() =>{
      setCharacters(res.data.reults);
    })
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {characters.map((person) =>{
        return (
          <CharacterCard key={person.name} name={person.name} location={person.location} />
        )
      })}
    </section>
  );
}

export default CharacterList;