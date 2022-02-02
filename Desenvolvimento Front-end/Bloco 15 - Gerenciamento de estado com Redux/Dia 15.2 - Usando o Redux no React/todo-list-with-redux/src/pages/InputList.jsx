import React from 'react';
import { connect } from 'react-redux';
// import store from '../store';
import taskAction from '../actions';

class InputList extends React.Component {
  constructor() {
    super();
    this.state = {
      inputTask: '',
    }
  }

  //Pq não funcionou? Tbm fiz com o DidUpdate
  // componentDidMount() {
  //   store.subscribe(() => {
  //     console.log(store.getState().tasks);
  //   })
  // }

  render() {
    const { add } = this.props;
    const { inputTask } = this.state;
    return (
      <section>
        <form action="">
          <label htmlFor="newTask">
            <input
              type="text"
              name="inputTask"
              id="newTask"
              onChange={ ({ target: { value } }) => this.setState({ inputTask: value }) }
            />
          </label>
          <button
            type="button"
            onClick={ () => add(inputTask) }
          >
            Adicionar tarefa
          </button>
        </form>
        
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (newTask) => dispatch(taskAction(newTask)),
});

export default connect(null, mapDispatchToProps)(InputList);
// export default InputList;