import React from 'react';
import ContextStates from './components/Context/ContextStates';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import GlobalStyled from './style/GlobalStyles';

function App() {
  return (
    <ContextStates>
      <GlobalStyled />
      <div className="container">
        <Header />
        <div className="content">
          <Main />
          <Footer />
        </div>
      </div>
    </ContextStates>
  );
}

export default App;
