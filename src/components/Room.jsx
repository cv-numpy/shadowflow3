import React, {useRef} from 'react';
import styled from "styled-components";

import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from 'react-webcam';

import Navbar from './Navbar';



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
      height: 200vh;
    }
`;



// Drawing function
const drawHand = (preditions, ctx) => {
    if (preditions.length > 0) {
        preditions.forEach(element => {
            const landmarks = element.landmarks;

            for (let i = 0; i < landmarks.length; i++){
                
                const x = landmarks[i][0];
                const y = landmarks[i][1];
                
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, 3*Math.PI);
                
                ctx.fillSyle = "indigo";
                ctx.fill();
                // console.log("drawing");
                console.log(ctx)
            }
        });
    }
}



const Room = () => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    
    
    const runHandpose = async () =>{
        const net = await handpose.load()
        console.log('Handpose model loaded.')
        
        // Looping the Detection
        setInterval(()=>{
    
        detect(net);
    
        
      }, 100)
    }
    
    const detect = async (net) => {
      if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
      ){
    
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;
    
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;
        
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;
        
        // detect
        const hand = await net.estimateHands(video);
        // draw
        const ctx = canvasRef.current.getContext("2d")
        drawHand(hand, ctx);
      }
    }
    
    runHandpose();
    return (
        <div>

            <Navbar />
            {/* <Webcam ref={webcamRef} />
            <canvas ref={canvasRef} /> */}

            <Webcam ref={webcamRef} 
            style={{
                position:"absolute",
                marginLeft:"auto",
                marginRight:"auto",
                left:0,
                right:0,
                textAlign:"center",
                zIndex:9,
                width:640,
                height:480,
            }}
            />

            <canvas ref={canvasRef} 
            style={{
                position:"absolute",
                marginLeft:"auto",
                marginRight:"auto",
                left:0,
                right:0,
                textAlign:"center",
                zIndex:9,
                width:640,
                height:480,
            }}
            />
            {/* </header> */}
        </div>
    );
};

export default Room;