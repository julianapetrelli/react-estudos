import React from 'react'

const App = () => {

  const [contar, setContar] = React.useState(0)


  React.useEffect(() => {
    document.title = 'total ' + contar
   }, /* Dependência necessária para que o efeito seja execultado */ [contar])

  return (
    <div>
        <button onClick={() => setContar (contar + 1 )}>{contar}</button>
    </div>
  )
}

export default App
