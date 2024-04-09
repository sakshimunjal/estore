import './App.css';
import LandingPage from './components';
import CatNav from './components/CatNav';
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import {Routes, Route} from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Header/>
      <CatNav/>
      <Routes>
        <Route path='/' Component={LandingPage}/>
        <Route path='/productDetail' Component={ProductDetails}/>
        <Route path='/cart' Component={Cart}/>
      </Routes>
    </div>
  );
}

export default App;
