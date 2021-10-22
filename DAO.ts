export default interface DAO<T> {
    nomeTabela : string

    inserir (obj: T): T
    lerTodos(): T[]
    lerUm(id: number): T
    atualizar(obj: T,id: number): T
    deletar(id: number): T    
}