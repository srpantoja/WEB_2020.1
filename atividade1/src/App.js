import React from 'react';
import './App.css';
import Questao1 from './components/questao1'
import Questao2 from './components/questao2'
import Questao3 from './components/questao3'
import Filho from './components/questao3/Filho'
import Questao4 from './components/questao4'
import Filho4 from './components/questao4/Filho4'

function App() {
  return (
    <div className="App">
      <div className='row'>
        <div className='col'>
          <Questao1 nome='Jean Pantoja' curso='Sistemas de informação' cidade='Quixadá' />

        </div>
        <div className='col'>
          <Questao2 nome='Assucena Araújo' curso='Enfermagem' cidade='Quixadá' />

        </div>
        <div className='col'>
          <Questao3>
            <Filho nome='Teemo' curso='Coelharia' cidade='Quixadá' />
          </Questao3>
        </div>
        <div className='col'>
          <Questao4>
            <Filho4 nome='Nevasca' curso='ratoaria' cidade='Quixadá' />
          </Questao4>
        </div>
      </div>
    </div>
  );
}

export default App;
