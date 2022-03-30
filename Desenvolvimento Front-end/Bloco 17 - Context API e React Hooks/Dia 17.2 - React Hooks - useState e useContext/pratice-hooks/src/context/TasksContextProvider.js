import React, { useState } from 'react';
import TasksContext from './TasksContext';

const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const value = {
    tasks,
    setTasks,
    task,
    setTask
  }
  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  );
}
 
export default TasksContextProvider;