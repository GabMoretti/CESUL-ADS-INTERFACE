import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Header(){

const {theme, changeTheme} = useContext(ThemeContext);

    return(

        <header>

            <nav>
                <p>Cadastrar |  Listar</p>
            </nav>

            <section>

                <button className="btnThema" onClick={changeTheme}>
                    <span class="material-symbols-outlined">{theme == 'DARK' ? 'dark_mode': 'light_mode'}</span>
                </button>
            </section>

        </header>

    )
}

export default Header;