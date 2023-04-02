// essa é uma classe abstrata, só vai servir para ser herdada
export class Conta{   
   constructor(saldoInicial, cliente, agencia) {
      if(this.construtor == Conta){
         throw new Error("Você não deveria instânciar um objeto do tipo Conta Diretamente, pois é uma classe abstrata")
      }
      this._saldo = saldoInicial
      this._cliente = cliente
      this._agencia = agencia
   }

   set cliente(novoValor){
      if(novoValor instanceof Cliente){ // se o novo valor for um instância de Clinte, entao..
          this._cliente = novoValor 
      }      
   }

   get cliente(){ // fazendo um acessor desse cliente
      return this._cliente
   }

   get saldo(){ // aqui estamos diendo que o saldo será apena para leitura, não podendo mudar manuamente
      return this.saldo
   }

   //método abstrato
   sacar(valor) { //vamos pedir para que esse valor seja expecificado nas contas, colocando essa mensagem de erro
      throw new Error("O método Sacar da Conta é abstrato")
   }

   //vamos colocar um comportamento de saque, esse this quer dizer desta conta em questão:
   _sacar(valor, taxa){
      const valorSacado = taxa * valor // aqui estamos cobrança uma taxa de 10%
      if (this._saldo >= valorSacado) {
          this._saldo -= valorSacado
          return valorSacado
      }

      return 0 // se não tiver saldo suficiente ele retorna 0
   }

   //vamos criar o comportamento de deposito, nessa rega ele só vai depositar se valor +:
   depositar(valor) {
      this._saldo += valor
   }

   //vamos sacar um valor e fazer o depósido em outra conta:
   transferir(valor, conta) {
      const valorSacado = this.sacar(valor)
      conta.depositar(valorSacado)
   }
}