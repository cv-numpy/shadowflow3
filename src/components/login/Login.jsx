// Purpose: Login page for the application 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import "./login.scss";

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

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <Navbar />
            <Section>
                <div className="login">
                    <div className="login__container">
                        <h1>Sign in to your account</h1>
                        <form onSubmit={handleLogin}>
                            <h5>E-mail</h5>
                            <input type="text" />
                            <h5>Password</h5>
                            <input type="password" />
                            <button type="submit" className="login__signInButton">
                                Sign In
                            </button>
                        </form>
                        <p>
                            By signing-in you agree to the Conditions of Use &
                            Sale. Please see our Privacy Notice, our Cookies
                            Notice and our Interest-Based Ads Notice.
                        </p>
                        <button className="login__registerButton">
                            Create your own Account
                        </button>
                    </div>
                </div>
            </Section>
        </div>

    );
    };  

export default Login;