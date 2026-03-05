class Conta {
    constructor(nome, saldo) {
        this.nome = nome
        this.saldo = saldo
    }

    deposito(valor) {
        this.saldo += valor
    }

    saque(valor) {
        this.saldo -= valor
    }

    mostrarSaldo() {
        console.log("Saldo:", this.saldo);
    }
}

let conta1 = new Conta("Carlos", 1000)

conta1.deposito(500)
conta1.saque(200)

conta1.mostrarSaldo()
