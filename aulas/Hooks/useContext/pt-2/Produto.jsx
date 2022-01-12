import react from 'react'
import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {

    const global = react.useContext(GlobalContext)

    console.log(global)

    if(global.dados === null) return null

    return (
        <div>
           <p>Produtos: {global.dados.map((produto) => <li key={produto.id}>{produto.nome}</li>)}</p>
        </div>
    )

}

export default Produto
