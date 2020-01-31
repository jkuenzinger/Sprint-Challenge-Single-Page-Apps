import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";
import { Link } from "react-router-dom";

export default function CharacterList() {
  const [ characters, setCharacters ] = useState([]);

  useEffect(() => {
axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log('this is api', response);
      setCharacters(response.data.results);
    })
    .catch(error => {
      console.error('error', error);
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
    {characters.map(person => (
       <CharacterCard key={person.id} name={person.name} location={person.location} />
        ))}
    </section>
  );
}

