import react from 'react'
import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {

    const global = react.useContext(GlobalContext)

    return (
        <div>
            <p>Produto: {global.nome}</p>
        </div>
    )

}

export default Produto
