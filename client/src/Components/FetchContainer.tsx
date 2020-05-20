import React from "react";
import NodeFetch from "./NodeFetch";
import PublicFetch from "./PublicFetch";
import { Card } from "semantic-ui-react";
import ComplexFetch from "./ComplexFetch";

const FetchContainer = () => {
  return (
    <>
      <Card.Group>
        <NodeFetch></NodeFetch>
        <PublicFetch></PublicFetch>
        <ComplexFetch></ComplexFetch>
      </Card.Group>
    </>
  );
};

export default FetchContainer;
