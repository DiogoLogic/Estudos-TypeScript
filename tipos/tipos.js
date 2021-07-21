"use strict";
//string
const nome = 'João';
console.log(nome);
// number
let idade = 27;
// idade = '27.5'
idade = 25.5;
console.log(idade);
// boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// tipos explícitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
//minhaIdade = '27'
//array
let hobbies = ["Cozinhar", " Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);
// Tuplas
let endereco = ["Av Princial", 99, "Bloco C"];
console.log(endereco);
endereco = ["Rua Importante", 1260, "Bloco C"];
console.log(endereco);
// Enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinsa"] = 0] = "Cinsa";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// funções
function retornaNome() {
    return nome;
}
console.log(retornaNome());
function digaOi() {
    console.log('oi');
}
digaOi();
function multiplicador(numA, numB) {
    return numA * numB;
}
console.log(multiplicador(4.7, 9));
// tipo função com variaveis
let calculo;
/*calculo = digaOi
calculo() error
*/
calculo = multiplicador;
console.log(calculo(5, 6));
//POO OBJETOS
let usuario = {
    nome: "João",
    idade: 27
};
usuario = {
    idade: 31,
    nome: 'Maria',
};
console.log(usuario);
let funcionario = {
    supervisores: ['Ana', 'Diogo', 'Paulo'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do hoario!';
        }
    }
};
///////////////////////////////////////////////////
let funcionario2 = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do hoario!';
        }
    }
};
//funcionario={} erro 
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
// Union Type
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nora é ${nota}!`);
nota = true;
console.log(`Minha nota ${nota}!`);
//checando Types
let valor = 30;
if (typeof valor === "number") {
    console.log("É um valor Number");
}
else {
    console.log(typeof valor);
}
//Never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: "Sabão",
    preco: 4,
    validarProduto() {
        if (this.nome.trim().length == 0) {
            falha('Precosa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço Invalido');
        }
    }
};
produto.validarProduto();
//Null
let altura = 12;
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Diogo',
    tel1: '971039950',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
let podeSerNulo = null; //tipo any
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'abc';
console.log(podeSerNulo);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map