import React, { useState, useEffect } from "react";
import { Card, Image, Button } from "semantic-ui-react";
const PublicFetch = () => {
  const [state, setState] = useState("");

  useEffect(() => {
    console.log("Public Fetch");
  }, []);

  return (
    <Card>
      <Image size="large" src="api-2x.png" />
      <Card.Header>Fetch from Public API</Card.Header>
      <Button content="FETCH" primary />
      <Card.Description>{state}</Card.Description>
    </Card>
  );
};

export default PublicFetch;
