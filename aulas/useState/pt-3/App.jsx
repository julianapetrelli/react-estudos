import React from 'react'
import Produto from './Produto'

const App = () => {

  const [dados, setDados] = React.useState(null)
  const [carregando, setCarregando] = React.useState(null)

  async function handleClick(event) {
    setCarregando(true)
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    )
    const json = await response.json()
    setDados(json)
    console.log(json)
    setCarregando(false)
  }

  return (
    <div>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>tablet</button>

      {/* Caso a api esteja processando os dados, apresente */}
      {carregando && <p>Carregando</p>}

      {/* Caso tenha carregado e os dados existam, execulte */}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  )
}

export default App
