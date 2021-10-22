import DAO from './DAO'
import Concessionaria from './Concessionaria'
import Carro from './Carro'

export default class ConcessionariaDao implements DAO{

    nomeTabela: string ='concessionaria'

    public inserir(concessionaria: Concessionaria) :Concessionaria { 
        console.log('inseri no banco')
        return concessionaria
    }
    
    public lerTodos(): Concessionaria[] { 
        console.log('Recuperar array de concessionarias')
        let concessionarias = new Array()
        let carros = new Array()
        let carro01 = new Carro('Civic',4)
        let carro02 = new Carro('Corolla',4)
        let carro03 = new Carro('HB20',4)
        let carro04 = new Carro('Fiesta',4)
        let carro05 = new Carro('KA',4)
        carros.push(carro01)
        carros.push(carro02)
        carros.push(carro03)
        carros.push(carro04)
        carros.push(carro05)

        let concessionaria1 = new Concessionaria('Rua 01',carros)
        let concessionaria2 = new Concessionaria('Rua 02',carros)
        let concessionaria3 = new Concessionaria('Rua 03',carros)
        let concessionaria4 = new Concessionaria('Rua 04',carros)
        let concessionaria5 = new Concessionaria('Rua 05',carros)

        concessionarias.push(concessionaria1)
        concessionarias.push(concessionaria1)
        concessionarias.push(concessionaria1)
        concessionarias.push(concessionaria1)
        concessionarias.push(concessionaria1)

        return concessionarias

        

    }
    public lerUm(id: number) :Concessionaria{     
        console.log('Retornar Concessionaria do ID'+id)
        let carros = new Array()
        let carro01 = new Carro('Civic',4)
        let carro02 = new Carro('Corolla',4)
        let carro03 = new Carro('HB20',4)
        let carro04 = new Carro('Fiesta',4)
        let carro05 = new Carro('KA',4)
        carros.push(carro01)
        carros.push(carro02)
        carros.push(carro03)
        carros.push(carro04)
        carros.push(carro05)
        let concessionaria1 = new Concessionaria('Rua 01',carros)
        return concessionaria1
    }
    public atualizar(concessionaria: Concessionaria, id: number) :Concessionaria {
        console.log('Atualizar Concessioanria id'+id)
        return concessionaria
    }

    public deletar(id: number) :Concessionaria { 
        console.log('Deletar pessoa id'+id)
        let carros = new Array()
        let carro01 = new Carro('Civic',4)
        let carro02 = new Carro('Corolla',4)
        let carro03 = new Carro('HB20',4)
        let carro04 = new Carro('Fiesta',4)
        let carro05 = new Carro('KA',4)
        carros.push(carro01)
        carros.push(carro02)
        carros.push(carro03)
        carros.push(carro04)
        carros.push(carro05)
        let concessionaria1 = new Concessionaria('Rua 01',carros)
        return concessionaria1
     }

}