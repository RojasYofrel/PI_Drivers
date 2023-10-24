import { Routes , Route} from 'react-router-dom';
import Landing from '../views/landing/LandingPage';
import Detail from '../views/detail/DetailPage';
import Home from '../views/home/HomePage';
import './App.css';

function App() {

  return (

      <div>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/form" element={<Detail/>} />
        </Routes>
      </div>
    
  )
}

export default App
