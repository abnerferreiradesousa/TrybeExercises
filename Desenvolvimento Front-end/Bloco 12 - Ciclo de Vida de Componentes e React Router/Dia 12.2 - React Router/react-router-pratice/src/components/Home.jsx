import React from "react";

// import About from './About';
// import Learning from './Learning';
// import Movie from './Movie.jsx';

// import { Route } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Meu Home</h1>
          {/* Criando rotas dentro do componente Home, fazendo com que a tag h1  e as respectiva rota seja rendenrizada */}
          {/* <Route path="/about" component={ About } />
          <Route path="/learning" component={ Learning } />
          <Route path="/movie" component={ Movie } /> */}
        </header>
      </div>
    );
  }
}

export default Home;
