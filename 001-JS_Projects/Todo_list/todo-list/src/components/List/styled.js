import styled from 'styled-components';

const ListStyled = styled.div`
  .tarefas, .tarefasLista  {
      border-radius: 5px 5px 0px 0px;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      background-color: #25273C;
      margin-top: 30px;
      width: 100%;
      height: 500px;
      font-size: 19px;

  }

  .tarefasLista {
      
      list-style: none;
      justify-content: start;
      flex-direction: column;
  }

  .tarefasLista > .formText {
      box-sizing: border-box;
      background-color: hsl(235, 24%, 19%);
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      border-bottom: 1px solid hsl(237, 14%, 26%);
      box-shadow: none;
  }

  .strikeWord {
      color: hsl(234, 11%, 52%);
      text-decoration: line-through;
  }


`;

export default ListStyled;
