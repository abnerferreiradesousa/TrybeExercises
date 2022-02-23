import React, { useState } from 'react';
import TasksContext from './TasksContext';

const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  return (
    <TasksContext.Provider value={}>
      {children}
    </TasksContext.Provider>
  );
}
 
export default TasksContextProvider;