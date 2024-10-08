let batatas = [];
function add(){
    let produto = document.getElementById("txt").value;
    let existe = false;
    for(let item of batatas){
        if(item.toUpperCase() == produto.toUpperCase()){
            existe = true;
            break;
        }
    }

    if(existe == false){
    batatas.push(produto);
    document.getElementById("lista").innerHTML = batatas;
    }
    else{
        alert("Este produto já foi cadastrado")
    }
}

function remove(){
    let produto = document.getElementById("txt").value;
    let posicao = -1;
    for(let item of batatas){
        if(item.toUpperCase() == produto.toUpperCase()){
            posicao = batatas.indexOf(item);
            break;
        }
    }
    if(posicao == -1){
    alert("Não foi encontrado produto com o nome: " + produto);
    }    
    else{
    batatas.splice(posicao, 1);
    document.getElementById("lista").innerHTML = batatas;
    }
}

// function edit(){
//     let produto = document.getElementById("txt").value;
//     for(let item of batatas){
//         if(item.toUpperCase() == produto.toUpperCase()){
//             item = prompt("Digite o novo valor para " + item);
//             break;
//         }
//     }
//     document.getElementById("lista").innerHTML = batatas;
// }
// Feito pelo professor mas não funcionou


function edit(){
    let produto = document.getElementById("txt").value;
    for(let pos = 0; pos < batatas.length; pos ++){
        if (batatas[pos].toUpperCase() == produto.toUpperCase()){

        batatas[pos] = prompt("Digite o novo valor para ");
            break;
        }
    }
    document.getElementById("lista").innerHTML = batatas;
}






//  Array(Vetor)  
// O tamanho do vetor sempre será Array-1 (pois o tamanho dele sempre iniciará no 0, )
// para inserir um item dentro do Array = 
//
//  .push(item) Adiciona um item ao final 
//  .indexOf(item) Retorna a posição do item
//  .splice(posição, quantidade) Remove o item da posição informada
//  .pop() Remove e retorna o item da ultima posição
//
//-----------------------------------------------------------------------------------------
// If(condição){
//      instruções
// }
//else if(condição){
//      instruções
// }
// else{
//      instruções caso não cumpra o if
// }
//
//let variavel
//while(condição){
//      instruções
//      incremento
// }
//
//for(let variavel; condição; incremento){
//      instruções   
// }
//
//
//  Comandos
// toUpperCase(palavra) = PALAVRA
// toLowerCase(PALAVRA) = palavra
//
//
//
//
//
//
//
//
