import React from "react";
import NodeFetch from "./NodeFetch";
import PublicFetch from "./PublicFetch";
import { Header, Button, Card, Image } from "semantic-ui-react";

const FetchContainer = () => {
  return (
    <>
      <Card.Group>
        <NodeFetch></NodeFetch>
        <PublicFetch></PublicFetch>
      </Card.Group>
    </>
  );
};

export default FetchContainer;
