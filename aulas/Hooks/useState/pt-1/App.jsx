import React from 'react'
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {

  // Retornando um valor e uma função para atualizar o valor informado
  // Durante a renderização inicial, o estado retornado é o mesmo que o valor passado como argumento inicial (initialState).
  // A função setState é usada para atualizar o estado. Ela aceita um novo valor de estado e coloca na fila de re-renderização do componente.
  const [modal, setModal] = React.useState(true);
  const [itens, setItens] = React.useState('teste');

  function handleClick () {
    itens = "Outros"
  }

  return (
    <div>
      <button onClick={handleClick}>Clicar</button>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  )
}

export default App
