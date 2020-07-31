import React from 'react'

export default function World(props) {
    return (
        <div className="card text-primary">
        <img src={props.arena} alt="arena" style={style} />
        <div className="card-body">
            {props.children}
        </div>
    </div>
    )
}

const style = {
    width: '302px',
    heigth: '136px'
}