var valor_total_compra = 0;

function adicionarProdutos() {
	
	alert("foi registrado o seu produto com sucesso!!");
	var produto_nome = document.getElementById("produto_nome").value;
	var produto_valor = document.getElementById("produto_valor").value * 1;
	var produto_quantidade = document.getElementById("produto_quantidade").value * 1;
	var produto_valor_total = (produto_valor * produto_quantidade);
	valor_total_compra += produto_valor_total;
	var produto_item_tabela =
		"<tr><td>" + produto_nome +
		"</td><td>" + produto_valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' }) +
		"</td><td>" + produto_quantidade +
		"</td><td>" + produto_valor_total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' }) +
		"</td></tr>";
	
	tabela_produtos.innerHTML +=produto_item_tabela;
	
	valor_total.innerHTML =  "<span>Total compra:</span>" +
		valor_total_compra.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' });
		
	//RESET DE ADICIONAR PRODUTOS 
		
}