let batatas = [];
function add(){
    let produto = document.getElementById("txt").value;
    let posicao = batatas.indexOf(produto);

    if(posicao == -1){
    batatas.push(produto);
    document.getElementById("lista").innerHTML = batatas;
    }
    else{
        alert("Este produto já foi cadastrado")
    }

   
  }

function remove(){
    let produto = document.getElementById("txt").value;
    let posicao = batatas.indexOf(produto);

    if(posicao == -1){
        alert("Não existe este item na lista");
    }
    else{
        batatas.splice(posicao, 1);
        document.getElementById("lista").innerHTML = batatas;
    }
}


//  Array(Vetor)  
// O tamanho do vetor sempre será Array-1 (pois o tamanho dele sempre iniciará no 0, )
// para inserir um item dentro do Array = 
//  .push(item) Adiciona um item ao final 
//  .indexOf(item) Retorna a posição do item
//  .splice(posição, quantidade) Remove o item da posição informada
//  .pop() Remove o item da ultima posição