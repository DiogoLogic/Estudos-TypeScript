//string
const nome: any = 'João'
console.log(nome)

// number
let idade: number = 27
// idade = '27.5'
idade = 25.5
console.log(idade)

// boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade
minhaIdade = 27
console.log(typeof minhaIdade)
//minhaIdade = '27'

//array
let hobbies: any[] = ["Cozinhar", " Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)

// Tuplas
let endereco: [string, number, string] = ["Av Princial", 99, "Bloco C"]
console.log(endereco)

endereco = ["Rua Importante", 1260, "Bloco C"]
console.log(endereco)

// Enums
enum Cor {
    Cinsa, // 0
    Verde = 100, //100
    Azul = 2,//2
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Azul)

// any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

// funções
function retornaNome(): string {
    return nome

}
console.log(retornaNome())

function digaOi(): void {
    console.log('oi')

}
digaOi()

function multiplicador(numA: number, numB: number): number {
    return numA * numB

}
console.log(multiplicador(4.7, 9))

// tipo função com variaveis
let calculo: (numeroA: number, numeroB: number) => number
/*calculo = digaOi
calculo() error
*/
calculo = multiplicador
console.log(calculo(5, 6))

//POO OBJETOS

let usuario: { nome: string, idade: number } = {
    nome: "João",
    idade: 27

}

usuario = {
    idade: 31,
    nome: 'Maria',
}

console.log(usuario)

//Desafio obj tipo [] 



// Alies
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario: Funcionario = {

    supervisores: ['Ana', 'Diogo', 'Paulo'],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return 'Ponto Normal'
        } else {
            return 'Fora do hoario!'
        }
    }
}

///////////////////////////////////////////////////

let funcionario2: Funcionario = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return 'Ponto Normal'
        } else {
            return 'Fora do hoario!'
        }
    }
}

//funcionario={} erro 
console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))


// Union Type

let nota:number | string | boolean =10
console.log(`Minha nota é ${nota}!`)
nota ='10'
console.log(`Minha nora é ${nota}!`)
nota = true
console.log(`Minha nota ${nota}!`)

//checando Types

let valor = 30

if(typeof valor === "number"){
    console.log("É um valor Number")

}else{
    console.log(typeof valor)
}

//Never
function falha(msg: string): never{
    throw new Error(msg)
}

const produto = {
    nome: "Sabão",
    preco: 4,
    validarProduto(){
        if(this.nome.trim().length == 0){
               falha('Precosa ter um nome') 
        }
        if(this.preco <= 0){
            falha('Preço Invalido')

        }
    }
}

produto.validarProduto()

//Null
let altura = 12

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome:string,
    tel1: string
    tel2: string|null
}

const contato1:Contato ={
    nome:'Diogo',
    tel1 :'971039950',
    tel2: null
}
console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo = null //tipo any
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = 'abc'
console.log(podeSerNulo)

//Desafio Final
type ContaBncaria ={
     saldo: number
     depositar:(valor: number) => void
}

let contaBancaria:ContaBncaria = {
    saldo: 3456,
    depositar(valor:number) {
        this.saldo += valor
    }
}
 
type Correntista={
    nome:string,
    contaBancaria:ContaBncaria
    contatos: string[]
}

let correntista:Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)