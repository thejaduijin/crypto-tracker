import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import CoinPage from './Pages/CoinPage/CoinPage';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" component={HomePage} exact />
          <Route path="/coins:id" component={CoinPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
