import ConcessionariaDao from './ConcessionariaDAO'
import Concessionaria from './Concessionaria'
import Carro from './Carro'
import Pessoa from './Pessoa'
import PessoaDao from './PessoaDAO'
import DaoImpl from './DaoImpl'


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


/* -- Criar uma pessoa -- */
let pessoa = new Pessoa('Cristiano','Civic')



/* -- Daos  normais -- */
let concessionariaDao  = new ConcessionariaDao()
console.log('-------------------------')
console.log(concessionariaDao.inserir(concessionaria))
console.log(concessionariaDao.atualizar(concessionaria,1))
console.log(concessionariaDao.lerTodos())
console.log(concessionariaDao.lerUm(1))
console.log(concessionariaDao.deletar(1))
console.log('-------------------------')

let pessoaDao = new PessoaDao()
console.log('-------------------------')
console.log(pessoaDao.inserir(pessoa))
console.log(pessoaDao.atualizar(pessoa,1))
console.log(pessoaDao.lerTodos())
console.log(pessoaDao.lerUm(1))
console.log(pessoaDao.deletar(1))
console.log('-------------------------')

/* -- DAO com genericos -- */

let daoConcessionariaImpl: DaoImpl<Concessionaria> = new DaoImpl<Concessionaria>() //tenho que pasar o tipo   

console.log('-------------------------')
console.log(daoConcessionariaImpl.inserir(concessionaria))
console.log(daoConcessionariaImpl.atualizar(concessionaria,1))
console.log(daoConcessionariaImpl.lerTodos())
console.log(daoConcessionariaImpl.lerUm(1))
console.log(daoConcessionariaImpl.deletar(1))
console.log('-------------------------')


let daoPessoaImpl: DaoImpl<Pessoa> = new DaoImpl<Pessoa>() //tenho que pasar o tipo   

console.log('-------------------------')
console.log(daoPessoaImpl.inserir(pessoa))
console.log(daoPessoaImpl.atualizar(pessoa,1))
console.log(daoPessoaImpl.lerTodos())
console.log(daoPessoaImpl.lerUm(1))
console.log(daoPessoaImpl.deletar(1))
console.log('-------------------------')