import React from 'react'

const ButtonModal = ({ setModal }) => {
    return (

        // Ao ser clicado o botão mudara seu status para true
        <button onClick={() => setModal(true)}>Abrir</button>
    )
}

export default ButtonModal
