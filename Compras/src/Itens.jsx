import { useState } from "react";
import estilo from "./Itens.module.css";
import ListaCompras from "./ListaCompras";

function Itens() {
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valor, setValor] = useState("");
  const [listaProdutos, setListaProdutos] = useState([]);

  const adicionarProduto = () => {
    if (produto !== "" && quantidade !== "" && valor !== "") {
      const novoProduto = {
        produto: produto,
        quantidade: quantidade,
        valor: valor,
      };

      setListaProdutos([...listaProdutos, novoProduto]);
      setProduto("");
      setQuantidade("");
      setValor("");
    }
  };

  return (
    <div>
      <ListaCompras
        produto={produto}
        quantidade={quantidade}
        valor={valor}
        setListaProdutos={setListaProdutos}
        setQuantidade={setQuantidade}
        setValor={setValor}
        adicionarProduto={adicionarProduto}
      />
      <div className={estilo.titulo}>Itens</div>
      <div>
        {listaProdutos.map((produto, index) => (
          <div key={index}>{produto.produto}</div>
        ))}
      </div>
    </div>
  );
}

export default Itens;