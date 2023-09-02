import React, { useState } from 'react';
import './App.css';
import VerificaImg from './verificaimg';

function App() {
  const [condition, setCondition] = useState(1); // Altere o valor para a condição desejada (1, 2 ou 3)

  return (
    <div className="App">
      <h1>Plantas A venda </h1>
      <button onClick={() => setCondition(1)}>Imagem 1</button>
      <button onClick={() => setCondition(2)}>Imagem 2</button>
      <button onClick={() => setCondition(3)}>Imagem 3</button>
      <VerificaImg condition={condition} />
    </div>
  );
}

export default App;