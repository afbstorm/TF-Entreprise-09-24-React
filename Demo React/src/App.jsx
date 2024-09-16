import Todo from './components/Todo/todo.jsx';
import './App.css'

function App() {

  const nbrEleves = 3
  const formateur = 'Kévin'

  return (
    <Todo cours='React' eleves={nbrEleves} formateur={formateur}/>
  )
}

export default App
