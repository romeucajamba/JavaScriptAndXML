function clickRequesAJAX(url, funcaoEventClick){
  let resposta = new XMLHttpRequest();


  resposta.onreadystatechange = function (){
    if(resposta.readyState == 4 && resposta.status == 200){
      funcaoEventClick(resposta)
    }else{
      document.getElementById('text').innerHTML = 'Estamos com algum problema, a culpa é nossa não tua';
    }
  }

  //Enviar e obter o pedido
  resposta.open("GET", url, true)
  resposta.send()
}

// ------------------- Função para alterar o conteudo das div's   --------------------///
function comando1(pedido){
  document.getElementById('caixa1').innerHTML = pedido.responseText;
}

function comando2(pedido){
  document.getElementById('caixa2').innerHTML = pedido.responseText;
}  