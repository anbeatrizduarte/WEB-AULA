$(document).ready(function(){

    // será colocado aqui os arquivos encontrados da pesquisa
    var encontrados = new Array();
	
    var digito = "";
    
    // tudo acontecerá a cada tecla digitada, vem daí a pesquisa dinâmica
    $("#txtPesquisa").keyup(function(){	
        digito = $("#txtPesquisa").val();
        for(var i = 0; i < obj.length; i++){
		
            // indexOf é o responsável por verificar se existe aquele texto em alguma parte do obj[i]
            if(obj[i].toLowerCase().indexOf(digito.toLowerCase()) != -1){
                encontrados.push(obj[i]);
            }else{
                var posicao = obj.indexOf(obj[i]);
                if(posicao){
                    encontrados.splice(posicao, 1);
                }
            }
        }
        filtraEncontrados();
    });

    function filtraEncontrados(){
		
        for(var i = 0; i < obj.length; i++){
            // esconde todos os produtos um por um
            $("#n-produto-"+i).hide(); 
        }
        for(var i = 0; i < encontrados.length; i++){
            for (var y = 0; y < obj.length; y++) {
                if(obj[y] == encontrados[i]){
                    // mostra o produto
                    $("#n-produto-"+y).show(); 
                }
            }
        }
        
        // se não tiver nada encontrado, mostra a linha escondida avisando o usuário
        if(encontrados.length == 0){
            $("#nenhumProduto").show();
        }else{
            $("#nenhumProduto").hide();
        }
        
        // esvaziamos o array para que ele seja renovado na próxima tecla pressionada no inicio da função acima
        encontrados = new Array();
    }

});
