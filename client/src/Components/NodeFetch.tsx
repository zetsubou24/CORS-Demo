import React, { useState, useEffect } from "react";
import { Card, Image, Button } from "semantic-ui-react";
const NodeFetch = () => {
  const [state, setState] = useState<any>("");

  const handleFetch = () => {
    console.log("Node Fetch");
    fetch("http://localhost:8000/api")
      .then((data) => {
        for (var pair of data.headers.entries()) {
          console.log(pair);
          setState(pair);
        }
        return data.json();
      })
      .then((data) => {
        console.log(state);
      });
  };

  return (
    <Card>
      <Image size="large" src="api-2x.png" />
      <Card.Header>Fetch from Backend Node server</Card.Header>
      <Button content="FETCH" primary onClick={() => handleFetch()} />
      <Card.Description>placeholder</Card.Description>
    </Card>
  );
};

export default NodeFetch;
