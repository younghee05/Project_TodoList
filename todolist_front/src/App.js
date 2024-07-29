import './App.css';
import { Global, css } from '@emotion/react';
import { reset } from './styles/global';
import MainPage from './pages/MainPage';
import Container from './components/Container/Container';

function App() {
  return (
    <>
      <Global styles={reset}/>
      <MainPage>


      </MainPage>
    </>
  );
}

export default App;
