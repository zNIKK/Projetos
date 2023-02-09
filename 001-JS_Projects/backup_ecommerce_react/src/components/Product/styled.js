import styled from "styled-components";
import * as colors from "../../config/colors";

export const ProductImg = styled.div`
  width: 440px;

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }

  div > button {
    padding: 0px;
  }

  div:first-child {
    margin-top: 100px;
  }

  div > img {
    border-radius: 15px;
    width: 440px;
  }

  .mainImg > img {
    width: 440px;
  }

  button > img {
    padding: 1px;
    border-radius: 15px;
    width: 80px;
  }

  button > img:hover {
    opacity: 0.7;
  }

  .arrow-button {
    display: none;
    width: auto;
  }

  .list {
    height: 80px;
    z-index: -1 !important;
  }

  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    margin: 0px;

    .mainImg > img {
      border-radius: 0px;
      width: 350px;
      height: 280px;
      object-fit: cover;
    }

    .mainImg > button {
      padding: 0px;
    }

    button > img:hover {
      opacity: 1;
    }

    div:first-child {
      justify-content: center;
      margin-top: 0px;
    }

    .arrow-button {
      display: block;
      width: 40px;
      height: 40px;
      background-color: ${colors.white};
      padding: 13px;
      border-radius: 100%;
    }

    .right {
      z-index: 0;
      transform: translateX(-60px);
    }

    .left {
      z-index: 0;
      transform: translateX(60px);
    }

    .list {
      display: none !important;
    }
  }
`;
