import React from 'react'

const MyButton = (props) => {
    const buttonStyle = {
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '600',
        backgroundColor: props.bg || 'blue',
        color: props.color || 'white',
    }

    return (
        <button style={buttonStyle} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default MyButton