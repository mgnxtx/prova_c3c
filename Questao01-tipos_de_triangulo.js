let n1 = prompt("Qual é o primeiro numero");
let n2 = prompt("Qual é o segundo numero?");
let n3 = prompt("Qual é o terceiro numero?");

if (n1.toLowerCase() == n2.toLocaleLowerCase() && n1.toLocaleLowerCase() == n3.toLocaleLowerCase() ) {
    alert("é um triângulo equilátero.");
    }
else if(n1.toLocaleLowerCase() == n2.toLocaleLowerCase() || n2.toLocaleLowerCase() == n3.toLocaleLowerCase() || n1.toLocaleLowerCase() == n3.toLocaleLowerCase()){
 alert("é um triângulo Isósceles.");
}
else{
    alert("é um triângulo Escaleno.")
}

