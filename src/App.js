import Header from './components/Header';
import styled, { createGlobalStyle } from 'styled-components';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import BasketList from './components/BasketList';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  body {
    background-color: #FAFAFA;

  }

  ::-webkit-scrollbar {
    width: 8px;
  }
 
  ::-webkit-scrollbar-thumb {
    background: #E0E0E0;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #E5E5E5; 
  }
`;

const StyledContainer = styled.div`
  width: 1440px;
  margin-top: 38.36px;
  display: flex;
  justify-content: center;
  & > div:not(:last-child) {
    margin-right: 16px;
  }

  @media (max-width: 720px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const StyledAppWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledAppWrapper>
        <StyledContainer>
          <Sidebar />
          <Content />
          <BasketList />
        </StyledContainer>
      </StyledAppWrapper>
      <Footer />
    </>
  );
};

export default App;
