import { createGlobalStyle } from "styled-components";
import * as colors from "../config/colors";

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: 'Kumbh Sans', sans-serif;
    background-color: ${colors.white};
    color: ${colors.grayishBlue};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
    color:#fff;
    padding: 10px 20px;
    border-radius: 7px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .marked {
    border-radius: 15px;
    position: relative;
    outline: 2px solid ${colors.primaryColor};
  }

  .marked::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 15px;
    opacity: 0.5;
  }
  
  .show {
    display: flex !important;
  }

  .hide {
    display: none !important;
  }

  .button-thumb {
    padding: 0px;
    height: 100%;
    
  }

  .add-button {
    font-size: medium;
    display: flex;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    width: 270px;
    background-color: ${colors.primaryColor};
    box-shadow: 0px 16px 40px -20px ${colors.primaryColor};
  }

  .add-button:active {
    opacity: 0.7;
    transform: translateY(5px);
    box-shadow: 0px 8px 40px -20px ${colors.primaryColor};
  }
  
  .add-button:hover {
    opacity: 0.7;
  }

  @media (max-width: 1200px) {
    main {
      flex-direction: column;
    }
    
    #modal {
      display: none !important;
    }
  }
`;
