import React, { useState } from "react";
import { Card, Image, Button } from "semantic-ui-react";
const ComplexFetch = () => {
  const [state, setState] = useState<any>("");
  const [time, setTime] = useState<any>("");

  const handleFetch = () => {
    console.log("Complex Node Fetch");
    fetch("http://localhost:8000/api/delete", {
      method: "DELETE"
    })
      .then(data => data.json())
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
        <Card.Header>Complex Fetch from Backend Node server</Card.Header>
        <Card.Description>
          {state === "" ? "" : state.msg + "\n" + time}
        </Card.Description>
      </Card.Content>
      <Button content="FETCH" primary onClick={() => handleFetch()} />
    </Card>
  );
};

export default ComplexFetch;
