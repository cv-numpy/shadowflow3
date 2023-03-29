import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 100px;
  @media only screen and (max-width: 768px) {
    height: 200px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 100px;
    
  }
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/shadowflow_logo1.jpg" />
          <List>
            {/* <ListItem >Home</ListItem> */}
            <Link to="/">Home</Link>
            {/* <ListItem>gestureControl</ListItem> */}
            <ListItem>Product</ListItem>
            {/* <ListItem>Room</ListItem> */}
            <Link to="/room">Room</Link>
            <Link to="/works">Works</Link>
            {/* <Link to="/login">Login</Link> */}
          </List>
        </Links>
        {/* <Icons>
        </Icons> */}
      </Container>
    </Section>
  );
};

export default Navbar;
