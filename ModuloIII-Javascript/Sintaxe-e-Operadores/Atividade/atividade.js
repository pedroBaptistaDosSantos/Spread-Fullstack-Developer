function compararNumeros(n1, n2) {
    return console.log(saoIguais(n1, n2) + soma(n1, n2) + maiorQue10menorque20(n1, n2));
}

function saoIguais(n1, n2) {
    let resposta;
    if(n1 == n2) resposta = 'sao';
    else resposta = 'nao sao';
    return `Os numeros ${resposta} iguais, `
}

function soma(n1, n2) {
    let result = n1 + n2;
    return 'sua soma é: '+ result + ', ';
}

function maiorQue10menorque20(n1,n2) {
    let result = n1 + n2;
    let resposta;
    if(result>10 && result<20)resposta = 'é';
    else  resposta = 'não é';
    return 'que '+ resposta + ' maior que 10 e menor que 20';
}

console.log(compararNumeros(7,7))
