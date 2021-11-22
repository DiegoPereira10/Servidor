let celular = function(){

this.cor = "vermelho";

this.ligar = function()
{

    console.log("ligação..");
    return "ligando";

}

}

let objeto = new celular();

console.log(objeto.ligar());
console.log(objeto.cor);

