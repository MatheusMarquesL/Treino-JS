class Conta {
    constructor(nome, saldo) {
        this.nome = nome
        this.saldo = saldo
    }

    deposito(valor) {
        this.saldo += valor
    }

    saque(valor) {
        if (valor > this.saldo){
            return 'Saldo insuficiente'
        } else {
            this.saldo -= valor
        }
    }

    mostrarSaldo() {
        return `Conta: ${this.nome} | Saldo: ${this.saldo}`
    }
}


let conta1 = new Conta("Omar", 1000)

function fazerDeposito() {

    let valor = Number(document.getElementById("valor").value)

    conta1.deposito(valor)

    document.getElementById("resultado").innerText = "Depósito realizado"
}

function fazerSaque() {
    
    let valor = Number(document.getElementById("valor").value)

    let resposta = conta1.saque(valor)

    document.getElementById("resultado").innerText = resposta ? resposta : "Saque realizado"
}

function mostrarSaldo() {
    document.getElementById("resultado").innerText = conta1.mostrarSaldo()
}

console.log("Js carregou");
