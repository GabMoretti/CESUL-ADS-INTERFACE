import { useContext } from "react";
import { Link } from "react-router-dom";
import { PrincipalContext } from "../hooks/PrincipalContext";
import estilo from "../componentes/Prova_Tela_X.module.css"

function Prova_Tela_4() {
    const { setResumo, nome } = useContext(PrincipalContext);

    return (
        <div>
            <div className={estilo.cima}>
                <header>Cesul</header>
                <header>Ola {nome}</header>
            </div>
            <div className={estilo.principal}>

                <div  className={estilo.titulo}>Digite o  resumo</div>
                <input type="text" onChange={(e) => setResumo(e.target.value)} className={estilo.resumo_tela_4}/>

                <button><Link to="/prova_Tela_5">Finalizar</Link></button>

            </div>
        </div>
    );

};

export default Prova_Tela_4;