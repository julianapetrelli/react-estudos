import React from 'react'

export const GlobalContext = React.createContext()

// Children é tudo que estiver dentro dele, la em App.jsx
export const GlobalStorage = ({children}) => {

    const [dados, setDados] = React.useState(null)

    React.useState(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto/')
        .then((response) => response.json())
        .then((json) => setDados(json))
    }, [])

    function limparDados() {
        setDados(null)
    }

    return <GlobalContext.Provider value={{ dados,  limparDados}}>{children}</GlobalContext.Provider>
}
