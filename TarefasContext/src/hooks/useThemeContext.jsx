export default function useThemeContext(){

    const context = useContext(ThemeContext);

    if(context == undefined){
        throw Error("Não está dentro do contexto")
    }
    
    return context;
}