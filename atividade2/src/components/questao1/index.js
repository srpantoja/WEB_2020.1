import React from 'react'
import hero from '../../images/tanjirou.jpg'
import enemy from '../../images/enemy.jpg'

const Hero = (props) => (
    <div> 
        <p>Olá, eu sou o tal do herói {props.name}</p>
        <img style={style} alt='hero' src={hero}/>

    </div>
)

const Enemy = (props) => (
    <div> 
        <p>Olá, eu sou o tal do inimigo {props.name}</p>
        <img style={style} alt='enemy' src={enemy}/>
    </div>
)


const Arena = (props) => (
    <div> 
        {props.children}
    </div>
)

const style = {
    width: '192px',
    heigth: '192px'
}

export {Hero, Enemy, Arena}