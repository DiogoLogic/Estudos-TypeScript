// Metodo Map
let arrayNumeros: Array<number> = [2, 3, 4, 5, 6]
let novoValor: any = arrayNumeros.map((num) => num * 2)
console.log(novoValor)

//Metodo Filter
let nomes: Array<string>= ['Diogo', 'Felipe', 'Vanderlam']
let newName: string[] = nomes.filter((nome) => nome.includes('o'))//o metodo includes me retorna o elemento tre or false
console.log(newName)

//Metodo  Reduce
let novoNome: any[] = ['Jorje', 'alves', 'Cipriano']
let newnome: any[] = novoNome.reduce((acumulado, names) => acumulado + '-' + names)
console.log(newnome)

let valores: any[] = [10, 20, 30, 40, 50, 60]
let novoNumeros: any[] = valores.reduce((acumulado, corrente) => acumulado + corrente)
console.log(novoNumeros)
console.log(valores)

