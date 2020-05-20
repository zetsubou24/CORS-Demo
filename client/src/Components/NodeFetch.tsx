import React, { useState } from "react";
import { Card, Image, Button } from "semantic-ui-react";
const NodeFetch = () => {
  const [state, setState] = useState<any>("");
  const [time, setTime] = useState<any>("");

  const handleFetch = () => {
    console.log("Node Fetch");
    fetch("http://localhost:8000/api")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setState(data);
        var date = new Date();
        setTime(date.getTime());
      });
  };

  return (
    <Card>
      <Image size="large" src="api-2x.png" />
      <Card.Content>
        <Card.Header>Fetch from Backend Node server</Card.Header>
        <Card.Description>
          {state === "" ? "" : state.msg + "\n" + time}
        </Card.Description>
      </Card.Content>
      <Button content="FETCH" primary onClick={() => handleFetch()} />
    </Card>
  );
};

export default NodeFetch;
