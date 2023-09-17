import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/destination' element={ <Destination /> } />
          <Route path='/crew' element={ <Crew /> } />
          <Route path='/technology' element={ <Technology /> } />
          <Route path='*' element={ <PageNotFound /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
