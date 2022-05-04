    let indice = []
    let vetor = []
    let valor
    let texto
    function insertfim(){
    valor = parseInt(document.getElementById('num').value);
    if (isNaN(valor)){
        window.alert("Não é um número!");
        exit();}
        else {
    vetor.push(valor);
    document.getElementById('num').value="";
    document.getElementById('num').focus();
    lista.innerHTML = "";
    for (let i = 0;i <vetor.length; ++i) {
    lista.innerHTML += `<li>${vetor[i]}</li>`;
    }
}
}
function insertinicio(){
    valor = parseInt(document.getElementById('num'));
    if (isNaN(valor)){  
        window.alert("Não é um número!");
        exit();}
    else {
    vetor.unshift(valor);
    document.getElementById('num').value="";
    document.getElementById('num').focus();
    lista.innerHTML = "";
    for (let i = 0;i <vetor.length; ++i) {
    lista.innerHTML += `<li>${vetor[i]}</li>`;
    }
}

}
function zerarvet(){
    vetor = document.getElementById('lista');
    vetor.innerHTML= vetor = [];
}
function inserirind(){
    let valorind = String(document.getElementById('ind').value);
    if (valorind == null || valorind ==""){
        alert("Valor inválido.")
        exit();}
    else{
        for (let i = 0;i <indice.length; ++i){
        if (valorind == indice[i]){
            alert("O número já está no índice!")
         exit();
        }
    }
    indice.push(valorind);
    lista2.innerHTML="";
    for (let i = 0;i <indice.length; ++i) {
    lista2.innerHTML += `<li>${indice[i]}</li>`;
    }
    document.getElementById('ind').value="";
    document.getElementById('ind').focus();
}
}
function removeind(){
    let indicepop = indice.pop();
    lista2.innerHTML="";
    for (let i = 0;i <indice.length; ++i) {
    lista2.innerHTML += `<li>${indice[i]}</li>`;
    document.getElementById('ind').value="";
    document.getElementById('ind').focus();
    }
}