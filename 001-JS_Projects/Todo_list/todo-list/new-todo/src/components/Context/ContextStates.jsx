import PropTypes from 'prop-types';
import React, {
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export const Context = createContext();

function initialState() {
  const tasksData = localStorage.getItem('tasks');

  return {
    tasks: tasksData ? JSON.parse(tasksData) : [],
  };
}

export default function ContextStates({ children }) {
  const [tasks, setTasks] = useState(initialState().tasks);
  const [newTasks, setNewTasks] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const value = useMemo(() => ({
    tasks,
    newTasks,
    isCompleted,
    setTasks,
    setNewTasks,
    setIsCompleted,
  }), [tasks, newTasks, isCompleted]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

ContextStates.propTypes = {
  children: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};
