import React from 'react'
import Produto from './Produto'

const App = () => {
  
  const [produto, setProduto] = React.useState(null)

  React.useEffect(() => {
    // Puxando o valor armazenado no localStorage
    const produtoLocal = window.localStorage.getItem('produto')

    // Caso exista, inclua o valor do localStorage ao setProduto
    if(produtoLocal !== null ) setProduto(produtoLocal)
    console.log(produtoLocal)
  }, [])

  React.useEffect(() => {
    if(produto !== null ) window.localStorage.setItem('produto', produto)
    // Armazenando o valor de produto dentro do localStorage
  }, [produto])

  function handleClick({target}) {
    setProduto(target.innerText)
  }

  return (
    <div>
      <h1>Preferencia: {produto}</h1>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      <Produto produto={produto}/>
    </div>
  )

}

export default App
