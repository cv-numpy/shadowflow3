import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import HandModel from "./HandModel";

const data = [
  "Contact:",
  "qufuboby@gmail.com"
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  position: relative;
  // color: black;
  // font-size: 14px;
  // font-weight: 300;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100%;
  width: 1400px;
  display: flex;
  scroll-snap-align: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 60px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 2;
  position: relative;
`;

const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <Section>
        <Navbar/>
        <Container>
          <Left>
            <List>
              {data.map((item) => (
                <ListItem key={item} text={item} onClick={() => setWork(item)}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Left>
          <Right>

            <HandModel />

        </Right>
      </Container>
    </Section>
  );
};

export default Works;
