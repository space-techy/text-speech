import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [apikey, setText] = useState('');

  return (
    <>
      <form action="" method="post" style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <label htmlFor="text"><h1>Add your API key</h1></label>
        <input type="text" name="api-key" id="text" onChange={(e)=>{
          setText(e.target.value);
        }} style={{
          width: '100%',
          height: '50px',
          fontSize: '2rem',
          padding: '10px',
          margin: '10px 0',
        }}/>
        <button type="submit" style={{
          width: '100%',
          height: '50px',
          backgroundColor: 'blue',
          color: 'white',
        }}>Submit</button>
      </form>
    </>
  )
}

export default App
