import React, { useState } from "react";
import { Card, Image, Button } from "semantic-ui-react";
const PublicFetch = () => {
  const [count, setCount] = useState<number>(150);
  const [state, setState] = useState<string>("");
  const [time, setTime] = useState<number>(0);
  const [image, setImage] = useState<string>("pokemon-logo.jpg");
  
  const handleFetch = () => {
    console.log("Public Fetch - Pokemon");
    fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setState(data.name);
        var date:Date = new Date();
        setTime(date.getTime());
        setCount(Math.floor(Math.random() * 800));
        setImage(data.sprites.front_default);
      });
  };

  return (
    <Card>
      <Image size="medium" src={image} />
      <Card.Content>
        <Card.Header>Fetch from Public API - PokeAPI</Card.Header>
        <Card.Description>
          {state === "" ? "" : state + "\n" + time}
        </Card.Description>
      </Card.Content>
      <Button content="FETCH" secondary onClick={() => handleFetch()} />
    </Card>
  );
};

export default PublicFetch;

// fetch(`https://pokeapi.co/api/v2/pokemon/150`)
//       .then((data) => data.json())
//       .then((data) => {
//         console.log(data);
//       })