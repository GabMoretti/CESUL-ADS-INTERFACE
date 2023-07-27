import { useContext } from "react";
import { Link } from "react-router-dom";
import { PrincipalContext } from "../hooks/PrincipalContext";
import estilo from "../componentes/Prova_Tela_X.module.css"

function Prova_Tela_2() {
    const { setTitulo, nome } = useContext(PrincipalContext);

    return(
        <div>
            <div className={estilo.cima}>
                <header>Cesul</header>
                <header>Ola {nome}</header>
            </div>
            <div className={estilo.principal}>


                <div className={estilo.titulo}>Informe o titulo do seu resumo</div>
                <input type="text" onChange={(e) => setTitulo(e.target.value)}/>

                <button><Link to="/prova_Tela_3">Próximo</Link></button>        
            </div>
        </div>
    );
    
};

export default Prova_Tela_2;