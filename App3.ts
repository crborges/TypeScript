import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria'

let carro = new Carro('Civic',4)
let moto = new Moto('Honda')

carro.acelerar()
carro.acelerar()
console.log(carro)


moto.acelerar()
moto.acelerar()
console.log(moto)

let concessionaria = new Concessionaria('Av paulista 1500',[])
console.log(concessionaria.fornecerHorariosFuncionamento())