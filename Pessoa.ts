import Carro from './Carro'


export default class Pessoa {
   
    
    private nome: string
    private carroPreferido: string
    private carro: Carro

    constructor(nome: string, carroPreferido: string){
        this.nome=nome
        this.carroPreferido= carroPreferido
        //this.carro = null
    }


    public dizerNome()                  : string    {   return this.nome            }
    public dizerCarrroPreferido()       : string    {   return this.carroPreferido  }
    public comprarCarro(carro: Carro)   : void      {   this.carro=carro            }
    public dizerCarroQueTem()           : Carro     {   return this.carro           }

}
