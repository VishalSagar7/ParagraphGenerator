import React, { useState } from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import './App.css';

// Initialize lorem-ipsum
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

function App() {
  const [numParagraphs, setNumParagraphs] = useState(0); 
  const [paragraphs, setParagraphs] = useState([]);


  const handleGenerate = () => {
    const newParagraphs = Array.from({ length: numParagraphs }, () => lorem.generateParagraphs(1));
    setParagraphs(newParagraphs);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Tired of boring Lorem Ipsum?</h1>
        <div className="form">
          <label>Paragraphs:</label>
          <input
            type="number"
            value={numParagraphs}
            onChange={(e) => setNumParagraphs(e.target.value)}
            min="1"
          />
          <button onClick={handleGenerate}>Generate</button>
        </div>

        <div className="generated-paragraphs">
          {paragraphs.map((para, index) => (
            <p key={index}>
              {index + 1}) {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
