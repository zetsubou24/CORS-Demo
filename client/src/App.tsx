import React from "react";
import "./App.css";
import FetchContainer from "./Components/FetchContainer";
import { Header, Segment } from "semantic-ui-react";
const App = () => {
  return (
    <Segment>
      <Header size="large">CORS Demonstration</Header>
      <FetchContainer></FetchContainer>
    </Segment>
  );
};

export default App;
