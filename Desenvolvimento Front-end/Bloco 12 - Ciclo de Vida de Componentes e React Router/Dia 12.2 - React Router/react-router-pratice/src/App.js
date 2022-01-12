import './App.css';

import Home  from './components/Home';
import About from './components/About';
import Learning from './components/Learning';
import Movie from './components/Movie.jsx';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path="/about" component={ About } />
      <Route path="/learning" component={ Learning } />
      <Route path="/movie" component={ Movie } />
      <Route exact path="/" component={ Home } />
    </BrowserRouter>
  );
}

export default App;
