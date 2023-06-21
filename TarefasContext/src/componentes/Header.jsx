import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from 'react-router-dom'

function Header() {

    const { theme, changeTheme } = useContext(ThemeContext);

    return (

        <header>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/cadastrar">Cadastrar</Link>
                <Link to="/listarTarefas">Listar</Link>

                <p>Cadastrar |  Listar</p>
            </nav>

            <section>

                <button className="btnThema" onClick={changeTheme}>
                    <span class="material-symbols-outlined">{theme == 'DARK' ? 'dark_mode' : 'light_mode'}</span>
                </button>
            </section>

        </header>

    )
}

export default Header;