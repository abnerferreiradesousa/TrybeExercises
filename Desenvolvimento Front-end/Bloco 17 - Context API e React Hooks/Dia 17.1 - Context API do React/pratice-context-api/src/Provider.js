import { useState } from 'react';
import MyContext from './MyContext';

const Provider = ({ children }) => {
  const [task, setTask] = useState('');
  const [allTask, setAllTask] = useState([]);
  return (
    <MyContext.Provider value={{ task, setTask, allTask, setAllTask } }>
      {children}
    </MyContext.Provider>
  );
}
 
export default Provider;