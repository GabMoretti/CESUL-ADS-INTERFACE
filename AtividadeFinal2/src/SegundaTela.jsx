import React, { useContext } from 'react';
import estilo from './SegundaTela.module.css';
import { NomeContext } from './NomeContex';

function SegundaTela() {
    const { nome } = useContext(NomeContext);

    return (
        <div className={estilo.principal}>
            <div className={estilo.cabecalho}>SEJA BEM-VINDO</div>
            <div className={estilo.nome}>{nome}</div>
            <button>INICIAR</button>
        </div>
    );
}

export default SegundaTela;