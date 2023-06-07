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
                <button onClick={changeTheme}>{theme}</button>
            </section>

        </header>

    )
}

export default Header;