a = prompt("qual a nota?");
soma1 = (a*1)+3;soma2 = (a*1)+2;soma3 = (a*1)+1; 
 if(a < 0 || a > 100){
    alert("nota invalida...");
}
else if(a == 100){
  alert("aprovado com nota: " + a)
}
 else if(soma1 %5 ==0 && a>37 ){
    alert("aprovado com nota: "+ soma1 );
}
 else if(soma2 %5 == 0 && a>37 ){
    alert("aprovado com nota: "+soma2);
}
    else if(soma3 %5 == 0 &&+ a>37 ){
    alert("aprovado com nota: "+ soma3);
}
    else if(a>0 && a>38){
        alert("aprovado com nota: "+ a);
    }
else{
    alert("reprovado com nota: " + a);
}
