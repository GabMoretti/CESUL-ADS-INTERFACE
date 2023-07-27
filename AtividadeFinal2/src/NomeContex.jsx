import React, { createContext, useState } from 'react';

export const NomeContext = createContext();

export const NomeProvider = ({ children }) => {
  const [nome, setNome] = useState('');

  return (
    <NomeContext.Provider value={{ nome, setNome }}>
      {children}
    </NomeContext.Provider>
  );
};