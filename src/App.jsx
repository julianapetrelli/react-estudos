import React from 'react'
import useLocalStorage from './useLocalStorage'
import useFech from './useFech'

const App = () => {

  const [produto, setProduto] = useLocalStorage('produto', '')
  const {request, data, loading } = useFech()

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/')
  }, [])

  function handleClick({target }) {
    setProduto(target.innerText)
  }

  if(loading === true ) return <p>Carregando...</p>
  if(data === null) return null
  return (
    <div>
      <div>Produto preferido: {produto}</div>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>

      {data.map((produto) => (
        <div key={produto.id}>
          <h3>{produto.nome}</h3>
        </div>
      ))}

    </div>
  )
}

export default App
