import React from 'react';
import logo from './logo.svg';
import { Arena, Hero, Enemy } from './components/questao1'
import { Arena2, Hero2, Enemy2 } from './components/questao2'
import { Arena4, Hero4, Enemy4 } from './components/questao4'
import World from './components/questao3'
import hero from './images/tanjirou.jpg'
import enemy from './images/enemy.jpg'
import arena from './images/arena.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='row'>
          <div className='col'>
            <h2>Questão 1</h2>
            <Arena>
              <Hero name='Tanjirou' />
              <Enemy name='Muzan' />
            </Arena>
          </div>
          <div className='col'>
            <h2>Questão 2</h2>
            <Arena2>
              <Hero2 name='Tanjirou' imghero={hero} />
              <Enemy2 name='Muzan' imgenemy={enemy} />
            </Arena2>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h2>Questão 3</h2>
            <World arena={arena}>
              <p>Batalha 1</p>
              <Arena2>
                <Hero2 name='Tanjirou' imghero={hero} />
                <Enemy2 name='Muzan' imgenemy={enemy} />
              </Arena2>
              <p>Batalha 2</p>
              <Arena2>
                <Hero2 name='Tanjirou' imghero={hero} />
                <Enemy2 name='Muzan' imgenemy={enemy} />
              </Arena2>
              <p>Batalha 3</p>
              <Arena2>
                <Hero2 name='Tanjirou' imghero={hero} />
                <Enemy2 name='Muzan' imgenemy={enemy} />
              </Arena2>
            </World>
          </div>
          <div className='col'>
            <h2>Questão 4</h2>
            <Arena4 arena="React dev c++">
              <Hero4 name='Tanjirou' imghero={hero} />
              <Enemy4 name='Muzan' imgenemy={enemy} />
            </Arena4>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
