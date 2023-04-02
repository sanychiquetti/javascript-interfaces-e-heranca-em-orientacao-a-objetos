import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionario/gerente.js"
import { Diretor } from "./Funcionario/diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Sany", 10000, 12345678945)
diretor.cadastrarSenha("123456")

const gerente = new Gerente("Marco", 5000, 98653254120)
gerente.cadastrarSenha("123")

const cliente = new Cliente("Mari", 9568452620, "1010")

const diretorEstaLogado = SistemaAutenticacao.login(gerente, "123")
const gerenteEstaLogado = SistemaAutenticacao.login(diretor, "123456")
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "1010")

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado)


/*import {ContaCorrente} from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js"
import { ContaSalario } from "./Conta/ContaSalario.js"

//aqui na index fica só a execução
// para usarmos essa classe criamos um new cliente para cada cliente
const cliente1 = new Cliente("Sany", 11122233309, 13268954)

// vamos criar uma variável para saber quantas contas temos:
const contaCorrenteSany = new ContaCorrente(cliente1, 1001)

//aqui vamos criar a nova conta poupança com (saldo, o cliente e a agência)
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)

// aqui vamos cria uma conta Salario com um (cliente)
const contaSalario = new ContaSalario(cliente1)

console.log(contaPoupanca)
console.log(contaCorrenteSany)
console.log(contaSalario)*/