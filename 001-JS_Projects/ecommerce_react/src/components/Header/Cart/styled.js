import styled from "styled-components";
import * as colors from "../../../config/colors";

export const CartStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  z-index: 1;
  top: 100px;
  right: 20px;
  border-radius: 15px;
  width: 400px;
  height: 250px;
  background-color: ${colors.white};
  box-shadow: 1px 15px 40px -12px ${colors.blackTransparent};

  h1 {
    padding: 20px;
    color: ${colors.black};
    font-size: 18px;
    border-bottom: 1px solid ${colors.lightGrayishBlue};
  }

  .content-empty {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    color: ${colors.darkGrayishBlue};
    font-weight: 700;
    transform: translateY(-10px);
  }
  .content {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    color: ${colors.darkGrayishBlue};
    font-weight: 500;
  }
  .content > div {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }

  .content > div > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .cardThumb {
    border-radius: 7px;
    width: 60px;
  }

  .content > div > button {
    padding: 0px;
  }

  .add-button {
    border-radius: 7px;
    height: 60px;
    width: 350px;
    box-shadow: 0px 16px 40px -25px ${colors.primaryColor};
    margin-bottom: 15px;
  }

  span {
    font-weight: 900;
    color: ${colors.black};
    margin-left: 6px;
  }
`;
