import React, { createContext, useState } from 'react';

export const PrincipalContext = createContext();

export const PrincipalProvider = ({ children }) => {
    const [nome, setNome] = useState('');
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [resumo, setResumo] = useState('');


    return (
        <PrincipalContext.Provider value={{ nome, setNome, titulo, setTitulo, autor, setAutor, resumo, setResumo }}>
            {children}
        </PrincipalContext.Provider>
    );
};