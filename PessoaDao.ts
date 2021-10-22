import DAO from './DAO'
import Pessoa from './Pessoa'

export default class  PessoaDAO implements DAO{
    nomeTabela: string ='pessoa'

    public inserir(pessoa: Pessoa) :Pessoa { 
        console.log('inseri no banco')
        return pessoa
    }
    
    public lerTodos(): Pessoa[] { 
        console.log('Recuperar array de pessoas')
        let pessoas = new Array();
        let pessoa1 = new Pessoa('Cristiano','Civic')
        let pessoa2 = new Pessoa('João','Corolla')
        let pessoa3= new Pessoa('Marcos','HB20')
        let pessoa4 = new Pessoa('Antônio','Fiesta')
        let pessoa5 = new Pessoa('Adriano','KA')
        
        pessoas.push(pessoa1)
        pessoas.push(pessoa2)
        pessoas.push(pessoa3)
        pessoas.push(pessoa4)
        pessoas.push(pessoa5)

        return pessoas

        

    }
    public lerUm(id: number) :Pessoa{     
        console.log('Retornar pessoa do ID'+id)
        let pessoa1 = new Pessoa('Cristiano','Civic')
        return pessoa1
    }



    public atualizar(pessoa: Pessoa, id: number) :Pessoa {
        console.log('Atualizar pessoa')
        return pessoa;
    }

    public deletar(id: number) :Pessoa { 
        console.log('Deletar pessoa id'+id)
        let pessoa1 = new Pessoa('Cristiano','Civic')
        return pessoa1
     }

}