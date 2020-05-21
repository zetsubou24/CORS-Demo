import React, { useState } from "react";
import { Card, Image, Button } from "semantic-ui-react";
type response = {
  msg : string
}
const NodeFetch = () => {
  const [state, setState] = useState<response>();
  const [time, setTime] = useState<number>(0);

  const handleFetch = () => {
    console.log("Node Fetch");
    fetch("http://localhost:8000/api")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setState(data);
        var date:Date = new Date();
        setTime(date.getTime());
      });
  };

  return (
    <Card>
      <Image size="large" src="api-2x.png" />
      <Card.Content>
        <Card.Header>Fetch from Backend Node server</Card.Header>
        <Card.Description>
          {state === undefined ? "" : state.msg + "\n" + time}
        </Card.Description>
      </Card.Content>
      <Button content="FETCH" primary onClick={() => handleFetch()} />
    </Card>
  );
};

export default NodeFetch;
