import React, { useContext } from 'react';
import MyContext from '../MyContext';

function Button({ type, children }) {
  const { setAllTask, task, allTask, setTask } = useContext(MyContext);

  const handleClick = () => {
    setAllTask([...allTask, task])
    setTask('');
  }
    return (
      <button
        type={ type }
        onClick={ handleClick }
      >
        {children}
      </button>
    );
}
 
export default Button;