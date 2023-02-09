import styled from "styled-components";
import * as colors from "../../config/colors";

export const HeaderStyled = styled.header`
  width: 80%;
  height: 120px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.lightGrayishBlue};

  nav,
  div {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    height: 100%;
    align-items: center;
    display: flex;
  }

  ul > a {
    margin-left: 40px;
    margin-right: 0px;
    height: 100%;
    display: flex;
    align-items: center;
  }

  a:hover {
    border-bottom: 5px solid ${colors.primaryColor};
    color: ${colors.black};
  }

  ul > a:first-child {
    margin-left: 50px;
  }

  a {
    margin: 0 10px 0 0;
    font-weight: bold;
    color: ${colors.grayishBlue};
  }

  button:first-child {
    position: relative;
  }

  button > div {
    position: absolute;
    width: 22px;
    height: 13px;
    top: 4px;
    right: 11px;
    border-radius: 15px;
    justify-content: center;
    background-color: ${colors.primaryColor};
    color: ${colors.white};
    font-size: 10px;
    font-weight: 700;
    padding: 1px 0px 1px 0px;
  }
  .avatar {
    border-radius: 100%;
    width: 50px;
  }

  .avatar:active {
    outline: 2px solid ${colors.primaryColor};
  }

  .avatar:hover {
    opacity: 0.7;
  }

  .responsiveButton {
    display: none;
  }

  @media (max-width: 1200px) {
    margin: 0px;
    width: 100%;
    height: 70px;

    .responsiveButton {
      padding: 0px 30px 0px 50px;
      height: 100%;
      display: flex;
      align-items: center;
      z-index: 3;
    }

    nav > div {
      position: absolute;
      width: 100vw;
      bottom: 0px;
      display: none;
      background-color: ${colors.blackTransparent};
      height: 100vh;
      z-index: 2;
    }
    nav > div > ul {
      padding-top: 120px;

      background-color: ${colors.white};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: 100vh;
      width: 60vw;
    }

    nav > div > ul > a,
    nav > div > ul > a:first-child {
      color: ${colors.black};
      width: 100%;
      height: 50px;
      margin: 0px;
      padding-left: 20px;
      margin-left: 20px;
    }
    nav > div > ul > a:hover {
      border-bottom: 0px;
      border-left: 5px solid ${colors.primaryColor};
    }
  }
`;
