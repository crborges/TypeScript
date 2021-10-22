import DAO from './DAO'

export default class DaoImpl<T> implements DAO {

    nomeTabela: string =''

    public inserir(Object: T) :T { 
        console.log('inseri no banco')
        //return Object()

    }
    
    public lerTodos(): T[] { 
        console.log('Recuperar array de objetos')
         return new Array()

        

    }
    public lerUm(id: number) :T{     
        console.log('Retornar objeto do ID'+id)
        return Object()
    }



    public atualizar(pessoa: T, id: number) :T {
        console.log('Atualizar objeto')
        return Object()
    }

    public deletar(id: number) :T { 
        console.log('Deletar objeto id'+id)
        return Object()
     }

} 
