import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <h2>23</h2>
        <button>+</button>
        <button>-</button>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
}

export default connect(mapStateToProps, null)(App);
