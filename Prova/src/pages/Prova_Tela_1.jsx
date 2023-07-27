import { useContext } from "react";
import { Link } from "react-router-dom";
import { PrincipalContext } from "../hooks/PrincipalContext";
import estilo from "../componentes/TelaLogin.module.css"

function Prova_Tela_1() {
    const { setNome } = useContext(PrincipalContext);

    return(
        <div className={estilo.principal}>

            <h1 className={estilo.logo}>CESUL</h1>

            <div>EMPRESA</div>
            <input type="text" placeholder="CESUL-ADM"/>

            <div>Seu Nome</div>
            <input type="text" onChange={(e) => setNome(e.target.value)}/>

            <button><Link to="/prova_Tela_2">Acessar</Link></button>

        </div>
    );
    
};

export default Prova_Tela_1;