"use strict";
// Metodo Map
let arrayNumeros = [2, 3, 4, 5, 6];
let novoValor = arrayNumeros.map((num) => num * 2);
console.log(novoValor);
//Metodo Filter
let nomes = ['Diogo', 'Felipe', 'Vanderlam'];
let newName = nomes.filter((nome) => nome.includes('o')); //o metodo includes me retorna o elemento tre or false
console.log(newName);
//Metodo  Reduce
let novoNome = ['Jorje', 'alves', 'Cipriano'];
let newnome = novoNome.reduce((acumulado, names) => acumulado + '-' + names);
console.log(newnome);
let valores = [10, 20, 30, 40, 50, 60];
let novoNumeros = valores.reduce((acumulado, corrente) => acumulado + corrente);
console.log(novoNumeros);
console.log(valores);
//# sourceMappingURL=exercicios.js.map