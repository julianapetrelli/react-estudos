import React from 'react'

const App = () => {

  const [comentarios, setComentarios] = React.useState([])
  const [input, setInput] = React.useState('')
  const inputElement = React.useRef()

  function handleClick() {
    // Pegando os comentários antigos, para em seguida adicionar os novos comentários
    setComentarios([...comentarios, input])
    setInput('')
    inputElement.current.focus()
  }

  return (
    <div>
      <div>
        <ul>
          {comentarios.map( comentario => (
            <li key={comentario}>{comentario}</li>
          ))}
        </ul>
      </div>
      <div>
        <input type="text" ref={inputElement} value={input} onChange={({target}) => setInput(target.value)}/>
        <button onClick={handleClick}>Comentar</button>
      </div>
    </div>
  )
}

export default App
