import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

export default function WelcomePage() {

  const Button1 = styled.button`
  dipslay: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  margin-right:20%;
  margin-left:20%;

  ` ;

  const Img1 = styled.img`
  dipslay: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  margin-left:40%;
  margin-right:40%;
  width:20%;

  ` ;
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
       <Link to='/Characters'>
         <Button1>Characters</Button1>
       </Link>
       <Link to="/Search">
         <Button1>Search</Button1>
       </Link>
       
       
       
        <Img1
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}

