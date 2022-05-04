function alerta() {
    const nome = String(document.getElementById('nome').value)
    const sobrenome = String(document.getElementById('sobrenome').value)
    alert(`Olá, ${nome} ${sobrenome}!`)
}
function limpar1() {
    document.getElementById('nome').value="";
}
function limpar2() {
    document.getElementById('sobrenome').value="";
}