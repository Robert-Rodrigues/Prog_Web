function resposta (){
    const min = parseInt(document.getElementById('num1').value);
    const max = parseInt(document.getElementById('num2').value);
    const tabela  = document.getElementById('tabela');
    const qtdnum = parseInt(document.getElementById('qtdnum').value);
    const colunas = parseInt(document.getElementById('colunas').value);
    if ((isNaN(min))== true||(isNaN(max))== true||(isNaN(qtdnum))== true||(isNaN(colunas))== true){
        alert("Preencha todos os campos!")
        exit();
    }
    tabela.innerHTML = "";
    for (let i = 1; i <=qtdnum; i++){
        tabela.innerHTML += Math.trunc(Math.random() * (max - min) + min ) + "\t";
    if (i % colunas == 0) {
        tabela.innerHTML += "\n";
    }
}

}