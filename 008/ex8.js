function calculo(){
let tabela = document.getElementById('tabela')
let valor = document.getElementById('reais').value  
let cedula = [200.0, 100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01]
tabela.innerHTML=""
for (let i = 0; i < 7; i++) { //notas
    let result = parseInt(valor / cedula[i])
    if(result != 0){
    tabela.innerHTML+=(`<li>${result} nota(s) de R$ ${cedula[i].toFixed(2)}</li>`)
    valor = valor % cedula[i]
}
}
for (let j = 7; j <cedula.length; j++) { //moedas
    let result = parseInt(valor / cedula[j])
    if(result != 0){
    tabela.innerHTML+=(`<li>${result} moeda(s) de R$ ${cedula[j].toFixed(2)}</li>`)
    valor = valor % cedula[j] 
}
}
}