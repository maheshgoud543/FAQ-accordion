import { useState } from 'react'
import './App.css'

const data = [
  {
    id: 1,
    Question: "Tell me about OnePiece",
    Answer: "With his straw hat and ragtag crew, young pirate Monkey D. Luffy goes on an epic voyage for treasure in this live-action adaptation of the popular manga.",
  },
  {
    id: 2,
    Question: "Tell me about OnePiece",
    Answer: "With his straw hat and ragtag crew, young pirate Monkey D. Luffy goes on an epic voyage for treasure in this live-action adaptation of the popular manga.",
  },
  {
    id: 3,
    Question: "Tell me about OnePiece",
    Answer: "With his straw hat and ragtag crew, young pirate Monkey D. Luffy goes on an epic voyage for treasure in this live-action adaptation of the popular manga.",
  },
];

function App() {
  const [show, setShow] = useState(Array(data.length).fill(false));

  const handleShow = (index) => {
    const newShow = [...show];
    newShow[index] = !newShow[index];
    setShow(newShow);
  };

  return (
    <div className='Container'>
      <h1>Frequently Asked Questions</h1>
      <ul>
        {data.map((que, index) => (
          <div key={que.id}>
            <div className="question-container">
              <h2>{que.Question}</h2>
              <button onClick={() => handleShow(index)}>+</button>
            </div>
            {show[index] && <p>{que.Answer}</p>}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
