let nome = window.prompt("Digite seu nome:")
while(nome == null || nome==""){
nome = window.prompt("Digite seu nome:")
}
alert(`Olá, ${nome}!`)