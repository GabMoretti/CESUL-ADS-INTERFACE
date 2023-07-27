import React from 'react';
import estilo from './TelaLogin.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { NomeContext } from './NomeContex';

function TelaLogin() {
    const { setNome } = useContext(NomeContext);

    return (
        <div className={estilo.principal}>
            <img
                src="https://horadecodar.com.br/wp-content/uploads/2022/04/programacao_00002.jpg"
                alt="Tela de Login"
            />
            <div className={estilo.login}>
                <h1 className={estilo.logo}>Sua logo</h1>
                <input type="text" placeholder="Usuário" onChange={(e) => setNome(e.target.value)}/>
                <input type="password" placeholder="Senha" />
                <button><Link to="/segundaTela">Logar</Link></button>
            </div>
        </div>
    );
}

export default TelaLogin;