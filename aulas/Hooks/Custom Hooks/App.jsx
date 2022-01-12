import React from 'react'
import useLocalStorage from './useLocalStorage'

const App = () => {

  const [produto, setProduto] = useLocalStorage('produto', '')

  return (
    <div>

    </div>
  )
}

export default App
