import React, {useState } from "react";

/**
 * Contexto conntendo o estado dos livros
 */
export const BooksContext = React.createContext({
    currentlyReading: [{}],
    setCurrentlyReading: ()=>{},
    wantToRead: [{}],
    setWantToRead: ()=>{},
    read: [{}],
    setRead: ()=> {},
})

/**
 * Provedor de livros utilizado na aplicação
 */
export const BooksProvider = ({children}) => {
    const [currentlyReading, setCurrentlyReading] = useState([]);
    const [wantToRead, setWantToRead]             = useState([]);
    const [read, setRead]                         = useState([]);

    return (
        <BooksContext.Provider
            value={[
                currentlyReading,
                setCurrentlyReading,
                wantToRead,
                setWantToRead,
                read,
                setRead,
            ]}
        >
            {children}
        </BooksContext.Provider>
    )
}
