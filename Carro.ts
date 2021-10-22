import Veiculo from './Veiculo'

export default class Carro extends Veiculo{
    private numeroDePortas: number

    constructor (modelo:string,numeroDePortas:number){
        super()
        this.modelo=modelo
        this.numeroDePortas=numeroDePortas
        this.velocidade=0
    }

}
//um export default que é exportado por fora do {} do import
export  let serial :string ='123456'