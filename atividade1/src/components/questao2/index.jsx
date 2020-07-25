import React from 'react'

class Questao1 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>Questão 2</h1>
                <p>Nome: {this.props.nome}</p>
                <p>Curso: {this.props.curso}</p>
                <p>Cidade: {this.props.cidade}</p>
            </div>
        )
    }
}

export default Questao1