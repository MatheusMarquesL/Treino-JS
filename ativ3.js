function calcularPrecoTotal(preco, quantidade){
  if(quantidade === 0){
    throw new Error("Quantidade inválida");
  }
  if(typeof preco !== "number" || typeof quantidade !== "number"){
    return NaN;
  }
  return preco * quantidade;
}

function verificarEstoque(qtd){
  return qtd > 0;
}

function listarProdutos(){
  return ["Notebook","Mouse","Teclado"];
}

function buscarProduto(id){
  if(id === 1){
    return {nome:"Notebook"};
  }
  return undefined;
}

module.exports = {
  calcularPrecoTotal,
  verificarEstoque,
  listarProdutos,
  buscarProduto
};