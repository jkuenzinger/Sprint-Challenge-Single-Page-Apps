import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
  console.log(props)
  const Card = styled.div`
  width:40%;
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  flex-direction:column;
  jusify-content:center;
  margin-right:30%;
  margin-left:30%;
  ` ;

  return (
  <Card>
   <h2> Name: {props.name}</h2>
    <p>Location: {props.location.name}</p>
  </Card>
  );
}
