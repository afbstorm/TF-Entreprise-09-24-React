import Todo from './components/Todo/todo.jsx';
import './App.css'

function App() {

  // const nbrEleves = 3
  // const formateur = 'Kévin'

  const todoList = [
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
    }
  ]

  return (
    <Todo todoList={todoList} />
  )
}

export default App
