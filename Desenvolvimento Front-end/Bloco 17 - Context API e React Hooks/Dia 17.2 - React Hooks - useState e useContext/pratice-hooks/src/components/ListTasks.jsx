import React, { useContext } from 'react'
import MyContext from '../MyContext';

function ListTasks() {
  const { allTask, setAllTask } = useContext(MyContext);

  const handleDelete = ({ target }) => {
    const deleteSelectedTask = allTask.filter((task) => task !== target.innerText);
    console.log(deleteSelectedTask);
    setAllTask(deleteSelectedTask);
  };

    return (
      <div>{allTask.map((task) => (
        <li
          key={task}
          onClick={ handleDelete }
        >
          {task}
        </li>
      ))}</div>
    );
}
 
export default ListTasks;

//PERGUNTAS

// - P q usar o Provider no index.js?