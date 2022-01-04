import React from 'react'

export const GlobalContext = React.createContext()

// Children é tudo que estiver dentro dele, la em App.jsx
export const GlobalStorage = ({children}) => {
    return <GlobalContext.Provider value={{ nome: "Juliana" }}>{children}</GlobalContext.Provider>
}
