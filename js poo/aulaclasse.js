class Veiculo {
    #marca
    #modelo

    constructor() {

    }

    setMarca(marca) {
        this.#marca = marca
    }

    getMarca() {
        return this.#marca
    }

    setModelo(modelo) {
        this.#modelo = modelo
    }

    getModelo() {
        return this.#modelo
    }

    mover() {
        return "O veículo está se movendo."
    }

    exibirInfo() {
        return `Marca: ${this.#marca} - Modelo: ${this.#modelo}`
    }
}

class Carro extends Veiculo {
    #portas
    constructor() {
        super()
    }

    setPortas(portas) {
        this.#portas = portas
    }

    getPortas() {
        return this.#portas
    }

    mover() {
        return "O carro está dirigindo na estrada."
    }
}

class Moto extends Veiculo {
    #cilindradas
    constructor() {
        super()
    }   

    setCilindradas(cilindradas) {
        this.#cilindradas = cilindradas
    }

    getCilindradas() {
        return this.#cilindradas
    }

    mover() {
        return "A moto está acelerando"
    }
}

let veiculos = []

let c1 = new Carro()
c1.setMarca("Toyota")
c1.setModelo("Corolla")
c1.setPortas(4)

veiculos.push(c1)

let m1 = new Moto()
m1.setMarca("Yamaha")
m1.setModelo("MT-07")
m1.setCilindradas(700)

veiculos.push(m1)

veiculos.forEach(function(v){
    console.log(v.exibirInfo());
})

veiculos.forEach(function(v){
    console.log(v.mover());
})

function cadastrarVeiculo() {
    let marca = document.getElementById("marca").value
    let modelo = document.getElementById("modelo").value
    let tipo = document.getElementById("tipo").value

    if (tipo === "carro"){
        let portas = document.getElementById("portas").value

        let carro = new Carro()
        carro.setMarca(marca)
        carro.setModelo(modelo)
        carro.setPortas(portas)

        veiculos.push(carro)
    }

    if(tipo === "moto"){
        let cilindradas = document.getElementById("cilindradas").value

        let moto = new Moto()
        moto.setMarca(marca)
        moto.setModelo(modelo)
        moto.setCilindradas(cilindradas)

        veiculos.push(moto)
    }
}

function listarVeiculos(){
    let resultado = document.getElementById("resultado")

    resultado.innerHTML = ""

    veiculos.forEach(function(v){
        resultado.innerHTML += v.exibirInfo() + "<br>"
    })
}

function moverVeiculos(){
    let resultado = document.getElementById("resultado")

    resultado.innerHTML = ""

    veiculos.forEach(function(v){
        resultado.innerHTML += v.mover() + "<br>"
    })
}