import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components'
import Container from './container.js'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Ubuntu', sans-serif;
    background-color: #f0f6ff;;
    font-size: 16px;
    display: flex;
    justify-content: center;
    height:100vh;
    align-items: center;
    color: hsl(0, 0%, 100%);
    @media (max-width: 425px) {
      margin:0;
    }
  }

  h1 {
    color: #02295a;
    font-weight:700;
    font-size:27px;
    margin:0;
    margin-top:10px;
  }

  h2 {
    font-weight: 700;
    color: #fff;
    font-size: 14px;
    letter-spacing: 1px;
    margin-top:0;
  }

  h3 {
    color: #02295a;
    font-weight:700;
    font-size:16px;
    margin:0;
    margin-top:10px;
  }

  p {
    color: #9699ab;
    padding: 15px 0 34px 0;
    margin: 0;
    @media (max-width: 425px) {
      padding: 15px 17px 0 0;
      line-height: 30px;
    }  
  }

  button {
    background-color: hsl(213, 96%, 18%);
    color: #f0f6ff;
    border: none;
    border-radius: 6px;
    padding:10px;
    width:22%;
    align-self: flex-end;
    margin-top: 38px;
    cursor:pointer;
    &:hover {
      background-color:hsl(243, 100%, 62%)
    }
    @media (max-width: 425px) {
      margin-bottom: 4%;
      margin-right:11%;
      border-radius: 3px;
      padding:14px;
    } 
  }

  .goBackBtn {
    color: #9699ab;
    background-color: hsl(0, 0%, 100%);
    font-weight:600;
    &:hover {
      background-color: hsl(0, 0%, 100%);
      color: hsl(213, 96%, 18%);
    }
  }

  .btnWrapper {
    display: flex;
    justify-content: space-between;
    @media (max-width: 425px) {
      position: fixed;
      bottom:0;
      height: 80px;
      background-color: hsl(0, 0%, 100%);
      width: 108%;
      right: -8%;
    } 
  }

`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet"/>
    <GlobalStyle/>
    <Container/>
  </React.StrictMode>
);
