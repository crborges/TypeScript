import Carro from './Carro'
import ConcessionarioInterface from './ConcessionariaInterface'

export default class Concessionaria implements ConcessionarioInterface{
    private endereco: string
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros: Array<Carro>){
        this.endereco= endereco
        this.listaDeCarros=listaDeCarros
    }
        
    public fornecerEndereco()               : string        {   return this.endereco          }
    public mostrarListaDeCarros()           : Array<Carro>  {   return this.listaDeCarros     }
    public fornecerHorariosFuncionamento()  : string        {   return 'De segunda  a sexta feira das 08:00 às 18:00 e Sabado das 08:00 às 12:00'}

}
