import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

export default function CharacterList() {
  const [ characters, setCharacters ] = useState([]);

  useEffect(() => {
axios.get('https://rickandmortyapi.com/api/character/')
    .then(response =>{
      setCharacters(response.data.reults);
    })
  }, []);

  return (
    <section className="character-list">
      <Link to='/'>
        <button>Home</button>
      </Link>
      <Link to='/Search'>
        <button>Search</button>
      </Link>
    {characters.map((person) =>{
        return (
          <CharacterCard key={person.name} name={person.name} location={person.location} />
        )
      })}
    </section>
  );
}

