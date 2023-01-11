import React from "react";
import Header from "./components/header/header";
import MainSection from "./components/main-section/main-section";
import Wrapper from "./components/wrapper/wrapper";

function App() {
  return (
    <Wrapper>
      <Header/>
      <MainSection/>
    </Wrapper>
  );
}

export default App;
