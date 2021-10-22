export default class Veiculo {

    
    protected modelo: string
    protected velocidade: number


    constructor (modelo:string) {
        this.modelo = modelo
        this.velocidade =0
    
    }    
    public setModelo(modelo: string)    :void{      this.modelo=modelo                       }
    public getModelo()                  :string{    return this.modelo                       }

    public acelerar()                   : void{     this.velocidade= this.velocidade+10     }
    public parar()                      : void{     this.velocidade=0                       }
    public velocidadeAtual()            : number{   return this.velocidade                  }



    
}