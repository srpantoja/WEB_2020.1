import React from 'react'

export default function Filho(props) {
    return (
        <div>
            <h4>Filho questao 3</h4>
            <p>Nome: {props.nome}</p>
            <p>Curso: {props.curso}</p>
            <p>Cidade: {props.cidade}</p>
        </div>
    )
}
