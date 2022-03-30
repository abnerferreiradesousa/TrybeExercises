import React from 'react';

import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ListTasks from './components/ListTasks';
import Provider from './Provider';

function App() {
    return (
      <div className="App">
        Todo List com Context API e React Hooks
        <form>
          <Provider>
            <Input type='text' htmlFor='task' task='Digite suas tarefas' />
            <Button type="button">Adicionar tarefa</Button>
            <ListTasks />
          </Provider>
        </form>
      </div>
    );
}

export default App;
