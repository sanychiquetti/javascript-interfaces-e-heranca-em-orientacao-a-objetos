//aqui criamos uma as classe, nelas colocamos 
//os atributos:
export class Cliente{
   //aqui não vamos deixar ninguém alterar o cpf e rg
   get cpf(){
      return this._cpf
   }

   get rg(){
      return this._rg
   }

   constructor(nome, cpf, rg, senha){
      this.nome = nome
      this._cpf = cpf
      this._rg = rg
      this._senha = senha
   }

   autenticar(){
      return true
   }
}