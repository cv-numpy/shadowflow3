
import {Route, Routes} from "react-router-dom";
import React, {useRef} from 'react';
import styled from "styled-components";
import Home from "./components/Home";
import Works from "./components/Works";


const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
color: white;
background: url("./img/bg.jpeg");
&::-webkit-scrollbar{
    display: none;
  }
  `;
  
function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </Container>

);
}
{/* <Container>
    <Home />
    <Works />
</Container> */}


export default App;
