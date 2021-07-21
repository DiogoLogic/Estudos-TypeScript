let canal: string ='Gaveta'
let inscritos:number = 610234

console.log(`Canal = ${canal}`)

//Evitando "any" implícito
function soma(a: any,b:any){
    return a + b
}

let qualquerCoisa
qualquerCoisa = 12
qualquerCoisa='abc'
