import React from 'react'


const Hero2 = (props) => (
    <div> 
        <p>Olá, eu sou o tal do herói {props.name} </p>
        <img style={style} alt='hero' src={props.imghero}/>

    </div>
)

const Enemy2 = (props) => (
    <div> 
        <p>Olá, eu sou o tal do inimigo {props.name}</p>
        <img style={style} alt='enemy' src={props.imgenemy}/>
    </div>
)


const Arena2 = (props) => (
    <div> 
        {props.children}
    </div>
)

const style = {
    width: '192px',
    heigth: '192px'
}

export {Hero2, Enemy2, Arena2}