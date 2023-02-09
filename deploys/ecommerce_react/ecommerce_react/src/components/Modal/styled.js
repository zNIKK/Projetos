import styled from "styled-components";
import * as colors from "../../config/colors";

export const ModalStyle = styled.div`
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;

  background-color: ${colors.blackTransparent};

  .closeButton {
    padding: 0px;
    padding-bottom: 30px;
    display: flex;
    width: 600px;
    justify-content: end;
  }

  div {
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    border-radius: 14px;
    width: 600px;
    height: 600px;
  }

  .close-modal {
    /* position: absolute;
    top: 60px;
    right: 280px; */
    width: 34px;
    height: 35px;
    padding: 0px;
  }

  .arrow-button {
    width: 60px;
    height: 60px;
    background-color: ${colors.white};
    padding: 20px;
    border-radius: 100%;
  }

  .right {
    transform: translateX(-50px);
  }

  .left {
    transform: translateX(50px);
  }

  .list {
    display: flex;
    justify-content: space-between;
    width: 600px;
    margin-top: 50px;
  }
  .list > button > img {
    display: flex;
    justify-content: center;

    width: 100px;
    height: 100px;
  }
`;
