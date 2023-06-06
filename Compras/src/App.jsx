import Itens from "./Itens"
import estilo from "./Fundo.module.css"

function App() {

  return (
    <>
      <div className={estilo.fundo}>
        <div className={estilo.box}>
          <Itens/>
        </div>
      </div>
    </>
  )
}

export default App
