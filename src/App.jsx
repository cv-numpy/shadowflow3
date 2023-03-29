
import {Route, Routes} from "react-router-dom";
import React, {useRef} from 'react';
import styled from "styled-components";
import Home from "./components/Home";
import Works from "./components/Works";
import Room from "./components/Room";
import Login from "./components/login/Login";

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
        <Route path="/room" element={<Room />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Container>

);
}
{/* <Container>
    <Home />
    <Works />
</Container> */}


export default App;
