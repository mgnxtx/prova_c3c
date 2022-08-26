let a = prompt("qual o numero?")
let numero = (n1)=>{
    let resultado = []; 
    for(i = 1; i<=n1 ; i++){ 
        if(i%5!=0){
        resultado.push(i);}
        if(i%5 == 0){
        resultado [i] ="Luidy";
        }
         if(i%9 == 0){
        resultado [i] ="Moura";
        }
        if(i%5 == 0 && i%9 == 0){
            resultado [i] ="LuidyMoura"
        }

    }
    resultado.splice(4,1);
    return resultado
}
alert(numero(a));