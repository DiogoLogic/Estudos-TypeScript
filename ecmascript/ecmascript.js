"use strict";
// let & const
//exemplo 1
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = "Colocar o casaco";
    console.log(acao);
}
//exemplo 2
const cpf = '087.0080.54-78';
//cpf = '087.0080.74-96'
console.log(cpf);
//exemplo 3
var segredo = 'externo';
function revelar() {
    const segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    {
        const def = 'def';
        console.log(def);
    }
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//console.log(i)
// Arrow Function
function somar(n1, n2) {
    return n1 + n2;
}
console.log("o resultado da soma é", somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log('o resultado da subtração é', subtrair(2, 3));
const saudacao = () => console.log("Olá!");
saudacao();
const falarCom = (pessoa) => console.log(`ola ${pessoa}`);
falarCom('João');
//this
function normalComThis() {
    console.log(this);
}
normalComThis();
const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' });
normalComThisEspecial();
// this???
console.log(this);
const arrowComThis = () => console.log;
arrowComThis();
const arrowComThisEspecial = arrowComThis.bind({ nome: 'Ana' });
arrowComThisEspecial();
//# sourceMappingURL=ecmascript.js.map