import React, { useContext } from 'react';
import MyContext from '../MyContext';

function Input({ htmlFor, type, task: textTask }) {
    const { task, setTask } = useContext(MyContext);
    return (
      <label htmlFor={htmlFor}>
        <input
          type={type}
          id={htmlFor}
          name={htmlFor}
          value={ task }
          placeholder={textTask}
          onChange={ ({ target }) => setTask(target.value) }
          />
      </label>
    );
}
 
export default Input;