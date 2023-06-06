import estilo from "./Itens.module.css";

function ListaCompras({ produto, quantidade, valor, setProduto, setQuantidade, setValor, adicionarProduto }) {

  return (
    <div className={estilo.tamanho}>
      <div className={estilo.titulo2}>LISTA COMPRAS</div>
      <div className={estilo.palavras}>Informe um produto</div>
      <input
        type="text"
        className={estilo.input}
        value={produto}
        onChange={(e) => setProduto(e.target.value)}
      />
      <div className={estilo.alinhamento}>
        <div className={estilo.palavras}>Informe a quantidade</div>
        <div className={estilo.palavra3}>Informe o valor</div>
      </div>
      <div className={estilo.alinhamento}>
        <input
          type="number"
          className={estilo.input2}
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />
        <input
          type="number"
          className={estilo.input3}
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
      </div>
      <div className={estilo.alinhamento2}>
        <button className={estilo.cadastrar} onClick={adicionarProduto}>
          CADASTRAR
        </button>
        <button className={estilo.limpar}>LIMPAR</button>
      </div>
    </div>
  );
}

export default ListaCompras;
