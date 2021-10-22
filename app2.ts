import Carro ,  {serial}           from './Carro' // o export default não precisa do {} já os outros exportes precisam dele 
import Concessionaria     from './Concessionaria'
import Pessoa             from './Pessoa'

/* Testes classe carro
let carroA = new Carro('HB20',4)
console.log(carroA)
carroA.acelerar()
carroA.acelerar()
console.log(carroA)
carroA.parar()
console.log(carroA)
*/



/* testes classe concessionaria
let concessionaria = new Concessionaria('Rua a',null)
console.log(concessionaria)
*/


/* teste classe pessoa
let pessoa = new Pessoa('João','Civic')
console.log(pessoa.dizerCarrroPreferido())
*/







/* -- Criar carros e lista de carros -- */
let carro1 = new Carro('Corrola',4)
let carro2 = new Carro('Veloster',3)
let carro3 = new Carro('HB20',4)
let carro4 = new Carro('kA',4)
let carro5 = new Carro('Fiesta',4)
let carro6 = new Carro('Civic',4)

/* -- Criar lista de carro da concessionaria -- */
let listaDeCarros: Carro[] =[carro1,carro2,carro3,carro4,carro5,carro6]

/* -- Criar uma concessionaria -- */
let concessionaria = new Concessionaria('Av Paulista 1000',listaDeCarros)

/* -- Exibir a lista de carros -- */
console.log(concessionaria.mostrarListaDeCarros())

/* -- Criar uma pessoa -- */
let pessoa = new Pessoa('João','Civic')
console.log(pessoa.dizerCarrroPreferido())

/* -- comprar carro preferido da pessoa -- */

concessionaria.mostrarListaDeCarros().map(function(carro){
    if (carro.getModelo()=== pessoa.dizerCarrroPreferido()){
        pessoa.comprarCarro(carro)
    }
})

/* -- Mostrar carro comprado pessoa -- */
console.log(pessoa.dizerCarroQueTem())