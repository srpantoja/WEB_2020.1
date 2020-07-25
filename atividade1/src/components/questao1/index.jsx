import React from 'react'

export default function index(props) {
    return (
        <div>
            <h1>Questão 1</h1>
            <p>Nome: {props.nome}</p>
            <p>Curso: {props.curso}</p>
            <p>Cidade: {props.cidade}</p>
        </div>
    )
}
