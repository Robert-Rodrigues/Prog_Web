function calculo() {
    const lista = document.getElementById('lista');
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    const soma = numero1 + numero2;
    const subtracao = numero1 - numero2;
    const divisao = numero1 / numero2;
    const multiplicacao = numero1 * numero2;
    const potenciacao = Math.pow(numero1, numero2);
    lista.innerHTML="";
    lista.innerHTML+=(`<li>[Soma] ${numero1} + ${numero2} = ${soma}</li><br>`);
    lista.innerHTML+=(`<li>[Subtração] ${numero1} - ${numero2} = ${subtracao}</li><br>`);
    lista.innerHTML+=(`<li>[Divisão] ${numero1} / ${numero2} = ${divisao}</li><br>`);
    lista.innerHTML+=(`<li>[Multiplicação] ${numero1} * ${numero2} = ${multiplicacao}</li><br>`);
    lista.innerHTML+=(`<li>[Potenciação] ${numero1} ^ ${numero2} = ${potenciacao}</li>`);
}