import Todo from './components/Todo/todo.jsx';
import {nanoid} from "nanoid";
import './App.css'
import {useState} from "react";

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

  const [newTask, setNewTask] = useState(
      {
        id: nanoid(),
        title: '',
        description: '',
        priority: '',
        isCompleted: false
      }
  )
  const handleChanges = (e) => {
    // const {name, value} = e.target;
    // setNewTask({...newTask, [name]: value})
    setNewTask({...newTask, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      if (newTask.id && newTask.description) {
        setTodoList([...todoList, newTask])
      }

      setNewTask(
          {
            id: nanoid(),
            title: '',
            description: '',
            priority: '',
            isCompleted: false
          }
      )
  }

  return (
      <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">
            <input
                type="text"
                name="title"
                value={newTask.title}
                onChange={(e) => handleChanges(e)} />
          </label>
          <label htmlFor="description">
            <textarea
                name="description"
                value={newTask.description}
                onChange={(e) => handleChanges(e)}></textarea>
          </label>
          <label htmlFor="priority">
            <select
                name="priority"
                value={newTask.priority}
                onChange={(e) => handleChanges(e)}>
              <option value="" disabled>Selectionner une priorité</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
          <button type='submit'>Confirmer</button>
        </form>
        <Todo todoList={todoList} />
      </>

  )
}

export default App
