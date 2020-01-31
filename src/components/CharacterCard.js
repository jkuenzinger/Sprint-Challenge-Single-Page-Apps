import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
  console.log(props)
  
  const Card = styled.div`
  dipslay: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  margin-right:30%;
  margin-left:30%;
  width:40%;

  ` ;

  return (
  <Card>
   <h2> Name: {props.name}</h2>
    <p>Location: {props.location.name}</p>
  </Card>
  );
}
