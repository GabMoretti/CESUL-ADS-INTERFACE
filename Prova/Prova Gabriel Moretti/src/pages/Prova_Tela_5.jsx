import { useContext } from "react";
import { PrincipalContext } from "../hooks/PrincipalContext";
import estilo from "../componentes/Prova_Tela_5.module.css"

function Prova_Tela_5() {
    const { titulo, autor, resumo } = useContext(PrincipalContext);

    return(
        <div className={estilo.principal}>

            <div>{titulo}</div>

            <div>{autor}</div>

            <div>{resumo}</div>

            <button>Finalizar</button>
                  

        </div>
    );
    
};

export default Prova_Tela_5;