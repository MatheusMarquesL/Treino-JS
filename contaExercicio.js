class Conta {
    constructor(nome, saldo) {
        this.nome = nome
        this.saldo = saldo
    }
    deposito (valor) {
        this.saldo += valor
    }

    saque (valor) {
        valor > this.saldo 
        ? console.log("saldo insuficiente")
        : this.saldo -= valor 
    }

    mostrarSaldo() {
        console.log(`Saldo: ${this.saldo}`);
        
    }
}

let conta1 = new Conta('Omar', 2000)

conta1.deposito(200)
conta1.saque(1000)
conta1.saque(1300)

conta1.mostrarSaldo()