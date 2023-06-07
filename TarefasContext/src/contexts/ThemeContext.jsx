import { createContext, useState } from "react";

//vou usar esse cara no useContext
export const ThemeContext = createContext();

//vou usar no HTML
export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('DARK')

    function changeTheme(){

        setTheme(theme !== 'DARK' ? 'DARK' : 'LIGHT')

    }

    return <ThemeContext.Provider value={{theme, changeTheme}}>{children}</ThemeContext.Provider>

}