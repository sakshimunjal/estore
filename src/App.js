import './App.css';
import CatNav from './components/CatNav';
import Header from './components/Header';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className="App">
      <Header/>
      <CatNav/>
      <MainComponent/>
    </div>
  );
}

export default App;
