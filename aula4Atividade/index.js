class Veiculo {
    #marca
    #modelo
    constructor(){}

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
        return `Marca: ${this.#marca} | Modelo: ${this.#modelo}` 
    }
}

class Carro extends Veiculo {
    #portas

    setPortas(portas) {
        this.#portas = portas
    }

    getPortas() {
        return this.#portas
    }

    mover() {
        return "O carro está dirigindo na estrada"
    }
}

class Moto extends Veiculo {
    #cilindradas

    setCilindradas(c) {
        this.#cilindradas = c
    }

    getCilindradas() {
        return this.#cilindradas
    }

    mover() {
        return "A moto está acelerando"
    }
}

const veiculos = []

function cadastrar (){
    const marca = document.getElementById("marca").value
    const modelo = document.getElementById("modelo").value 
    const tipo = document.getElementById("tipo").value

    if(tipo === "carro") {
        const portas = document.getElementById("portas").value

        const carro = new Carro()

        carro.setMarca(marca)
        carro.setModelo(modelo)
        carro.setPortas(portas)

        veiculos.push(carro)
    } else {
        const cilindradas = document.getElementById("cilindradas").value 

        const moto = new Moto()

        moto.setMarca(marca)
        moto.setModelo(modelo)
        moto.setCilindradas(cilindradas)

        veiculos.push(moto)
    }

    
  document.getElementById("marca").value = ""
  document.getElementById("modelo").value = ""
  document.getElementById("portas").value = ""
  document.getElementById("cilindradas").value = ""
}

function listar() {
    let texto = ""

    veiculos.forEach(v => {
        texto += v.exibirInfo() + "<br>"
    })

    document.getElementById("resultado").innerHTML = texto
}

function mover() {
    let texto = ""

    veiculos.forEach(v => {
        texto += v.mover() + "<br>"
    })

    document.getElementById("resultado").innerHTML = texto
}

const tipo = document.getElementById("tipo")

tipo.addEventListener("change", function() {
    const campoPortas = document.getElementById("campoPortas")
        const campoCilindradas = document.getElementById("campoCilindradas")
    if(tipo.value === "carro") {
        campoPortas.style.display = "block"
        campoCilindradas.style.display = "none"
    } else {
        campoPortas.style.display = "none"
        campoCilindradas.style.display = "block"
       
    }
})  

tipo.dispatchEvent(new Event("change"))