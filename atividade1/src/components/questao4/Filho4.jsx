import React from 'react'

class Questao4 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div class="card text-white bg-primary mb-3" >
                <div class="card-header"><h4>Filho questao 4</h4></div>
                <div class="card-body">
                    <p>Nome: {this.props.nome}</p>
                    <p>Curso: {this.props.curso}</p>
                    <p>Cidade: {this.props.cidade}</p> </div>
            </div>
        )
    }
}

export default Questao4

