import React from 'react'

const App = () => {

  const [contar, setContar] = React.useState(1);
  const [itens, setItens] = React.useState(['Item 1'])

  return (
    <div>
      <button onClick={handleClick}>{contar}</button>
    </div>
  )
}

export default App
