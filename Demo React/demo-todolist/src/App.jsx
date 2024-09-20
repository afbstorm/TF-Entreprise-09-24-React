import Todo from './components/Todo/todo.jsx';
import {nanoid} from "nanoid";
import './App.css'
import {useState} from "react";
import TaskForm from './components/TaskForm/task-form.jsx';

function App() {

  // const nbrEleves = 3
  // const formateur = 'Kévin'

  const [todoList, setTodoList] = useState([
    {
      id: nanoid(),
      title: 'Apprendre React',
      description: 'Les joies des useState, useEffect, etc...',
      priority: 'high',
      isCompleted: false
    },
    {
      id: nanoid(),
      title: 'Aller manger',
      description: 'Un bon sandwish de chez Lolotte',
      priority: 'low',
      isCompleted: true
    },
    {
      id: nanoid(),
      title: 'Voir les useState',
      description: 'Les états locaux, on aime',
      priority: 'medium',
      isCompleted: true
    },
    {
      id: nanoid(),
      title: 'Voir les formulaires',
      description: 'Comment on rajoute un élément depuis un formulaire',
      priority: 'high',
      isCompleted: true
    },
  ]);

  const handleNewTask = (task) => {
    setTodoList([...todoList, task])
  }

  return (
      <>
        <TaskForm onTaskSubmit={handleNewTask} />
        <Todo todoList={todoList} />
      </>

  )
}

export default App
