import React from 'react'
import hero from '../../images/tanjirou.jpg'
import enemy from '../../images/enemy.jpg'

const Hero4 = (props) => (
    <div>
        <p>Olá, eu sou o tal do herói {props.name} e vou lutar na arena {props.arena}</p>
        <img style={style} alt='hero' src={hero} />

    </div>
)

const Enemy4 = (props) => (
    <div>
        <p>Olá, eu sou o tal do inimigo {props.name} e vou lutar na arena {props.arena}</p>
        <img style={style} alt='enemy' src={enemy} />
    </div>
)


const Arena4 = (props) => (
    <div>
        {React.Children.map(props.children, (personagem) =>
            React.cloneElement(personagem, { ...props })
        )
        }
    </div>
)

const style = {
    width: '192px',
    heigth: '192px'
}

export { Hero4, Enemy4, Arena4 }