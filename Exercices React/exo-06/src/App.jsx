import { useState } from 'react';
import './App.css'
import Clock from './components/Clock/Clock';
import DateOfDay from './components/DateOfDay/DateOfDay';

function App() {

  const [displayTime, setDisplayTime] = useState(false);

  return (
    <>
      <h1>Exo 06 - Cycle de vie</h1>

      {displayTime ? (
        <Clock />
      ) : (
        <DateOfDay />
      )}
      <button onClick={() => setDisplayTime(dt => !dt)}>Change</button>
    </>
  )
}

export default App
