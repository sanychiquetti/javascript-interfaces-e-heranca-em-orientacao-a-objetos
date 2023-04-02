import { Conta } from "./Conta.js"

//com o extends estamos pedindo para trazer tudo que tem na classe conta para k, fazendo assim a herança
export class ContaCorrente extends Conta {
   static numeroDeContas = 0 //aqui ele é acessado por outras classes
   constructor(cliente, agencia){
      super(0, cliente, agencia)
      ContaCorrente.numeroDeContas += 1 //estou somando mais 1 a cada nova conta criada
   }

   //aqui vamos sobreescrever o método sacar, qdo for chamado ContaCorrente, essa vai ser chamada
   sacar(valor) {
      let taxa = 1.1
      return this._sacar(valor, taxa)
   }

}