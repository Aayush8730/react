import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const [visible, setVisible] = useState(true);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleVisibility(){
     setVisible(!visible);
  }

  return (
    <>
      <div className="Counter">
        <h1>Count: {count}</h1>
        <button onClick={handleIncrement}>Increment+</button>
        <button onClick={handleDecrement}>Decrement-</button>
      </div>
      <br />
      <hr />
      <div className="Copier">
        <h1>Text Copier</h1>
        <label htmlFor="">Type Something here:</label>
        <input type="text" value={text} onChange={handleTextChange} />
        <p>You typed: {text}</p>
      </div>
      <br />
      <hr />
      <div className='on-off'>
      <h2>Visibility Toggle</h2>
      <button onClick={handleVisibility}>
        {visible ? 'Hide' : 'Show'} Paragraph
      </button>
      {visible && <p>Hello There!!</p>}
    </div>

    </>
  )
}

export default App
