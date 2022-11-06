function calcular(){
    var nome = document.getElementById("first_n").value;
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    var n4 = document.getElementById("n4").value;

    var media = parseFloat(Number(n1) + Number(n2) + Number(n3) + Number(n4)) / 4

    document.getElementById('result').setAttribute("value", media);
    // document.getElementById('nomew').innerHTML = nome

    if (media >="7"){
        document.getElementById('condicao').setAttribute("value", "Aprovado");
        alert("Salve Edilva")
    } else if (media <="4"){
        document.getElementById('condicao').setAttribute("value", "Reprovado");
    } else{
        document.getElementById('nomew').innerHTML = nome
        document.getElementById('condicao').setAttribute("value", "irá fazer final")
        let verificar = Number((50 - (media * 6)) / 4)
        document.getElementById('lb2').innerHTML = 'Pontos necessários para passar: '+verificar;
    }
}
console.log("Salve Edilva")