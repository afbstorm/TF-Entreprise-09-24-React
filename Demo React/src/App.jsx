import Todo from './components/Todo/todo.jsx';
import './App.css'
import {useState} from "react";

function App() {

  // const nbrEleves = 3
  // const formateur = 'Kévin'

  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: 'Apprendre React',
      description: 'Les joies des useState, useEffect, etc...',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Aller manger',
      description: 'Un bon sandwish de chez Lolotte',
      isCompleted: true
    },
    {
      id: 3,
      title: 'Voir les useState',
      description: 'Les états locaux, on aime',
      isCompleted: true
    },
    {
      id: 4,
      title: 'Voir les formulaires',
      description: 'Comment on rajoute un élément depuis un formulaie',
      isCompleted: false
    },
  ]);

  return (
    <Todo todoList={todoList} />
  )
}

export default App
