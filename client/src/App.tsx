import React from "react";
import "./App.css";
import FetchContainer from "./Components/FetchContainer";
import { Header } from "semantic-ui-react";
const App = () => {
  return (
    <>
      <Header size="large">CORS Demonstration</Header>
      <FetchContainer></FetchContainer>
    </>
  );
};

export default App;
