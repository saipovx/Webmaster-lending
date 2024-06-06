import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style/App.css';
import Header from './components/Header/Header';
import ScrollTop from './utils/scrollTop';
import Main from './components/Main/Main';
import Footer from './components/footer/footer';

function App() {

  const apiUrl = process.env.REACT_APP_API_URL;

  console.log(apiUrl);

  return (

    <BrowserRouter>


    <div className="app">

      <ScrollTop />

      <Main apiUrl={apiUrl} />

    </div>
    
    </BrowserRouter>
  
  );
}




export default App;
