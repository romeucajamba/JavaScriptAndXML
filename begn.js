function executar(){
  //criar nosso objecto
  let request = new XMLHttpRequest();

  
  
  //Nossa função que mudo o comportamento ou dados da nossa div
  request.onreadystatechange = function(){
    //Minha condição erro e sucesso na busca e obtenção dos dados no servidor
    if(request.readyState == 4 && request.status == 200){

      //Tratamento de dados
      let dados = this.responseXML;//dados xml
      let clientes = dados.getElementsByTagName('cliente')
      let conteudo = '<hi>Clientes</h1>';

      //Iterando nossa lista de clientes
      for(let i = 0; i < clientes.length; i++){
        conteudo += '<p>Nome: ' + clientes[i].getElementsByTagName('nome')[0].childNodes[0].nodeValue + '</p>';
        conteudo += '<p>Apelido: ' + clientes[i].getElementsByTagName('apelido')[0].childNodes[0].nodeValue + '</p>';
        conteudo += '<p>Contacto: ' + clientes[i].getElementsByTagName('contacto')[0].childNodes[0].nodeValue + '</p>';
        conteudo += '</br>'
      }
      //Definir dados
      document.getElementById('caixa').innerHTML = conteudo;

    }

  }



  //Eviando pedido ao arquivo xml 
  request.open("GET", "dados.xml", true)
  //obtendo os dados do arquivo xml
  request.send();


}