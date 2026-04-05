// class Livro {
//     constructor(titulo) {
//         this.titulo = titulo
//     }

// }

// const livro1 = new Livro("Dom Casmurro")


// class Celular {
//     constructor(marca) {
//         this.marca = marca
//     }
// }

// const celular1 = new Celular("Samsung")


// class Aluno {
//     constructor(nome) {
//         this.nome = nome
//     }
// }

// const aluno1 = new Aluno("Carlos")


class Filme {
    constructor(titulo, ano) {
        this.titulo = titulo
        this.ano = ano
    }

    mostrarTitulo() {
        console.log(this.titulo);
    }
}

const filme1 = new Filme("Pelé", 2007)

console.log(filme1);

