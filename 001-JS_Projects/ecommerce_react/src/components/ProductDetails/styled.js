import styled from "styled-components";
import * as colors from "../../config/colors";

export const Content = styled.div`
  width: 450px;

  .subTitle {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    color: ${colors.primaryColor};
    letter-spacing: 1px;
  }

  h1 {
    margin-top: 15px;
    font-size: 38px;
    color: ${colors.black};
  }

  p {
    margin: 40px 0px 25px 0px;
  }

  .mainPrice-content {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .price {
    display: inline;
    margin-right: 20px;
    font-size: 28px;
    color: black;
    font-weight: bold;
  }

  .discount {
    font-weight: bold;
    color: ${colors.primaryColor};
    background-color: ${colors.secundaryColor};
    padding: 2px 5px 2px 5px;
    border-radius: 20%;
  }

  .old-value {
    text-decoration: line-through;
  }

  .add-button > img {
    width: 18px;
    margin-right: 20px;
  }

  input {
    font-weight: 900;
    border: none;
    background-color: ${colors.lightGrayishBlue};
    width: 50px;
    text-align: center;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  form {
    margin-top: 40px;
    height: 60px;
    display: flex;
    justify-content: space-between;
  }

  .button-group {
    border-radius: 15px;
    display: flex;
    background-color: ${colors.lightGrayishBlue};
    border-radius: 10%;
  }

  @media (max-width: 1200px) {
    margin: 10px 0px 20px 0px;
    height: 100%;
    max-width: 350px;

    h1 {
      font-size: 30px;
    }
    p {
      color: ${colors.darkGrayishBlue};
      margin: 20px 0px 25px 0px;
    }
    form {
      height: 150px;
      margin-top: 10px;
      flex-direction: column;
    }

    .button-group {
      height: 100%;
    }

    input {
      width: 100%;
    }

    .add-button {
      padding: 0px;
      margin-top: 20px;
      height: 100%;
      width: 100%;
    }

    .mainPrice-content {
      margin-bottom: 0px;
    }

    .price-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
