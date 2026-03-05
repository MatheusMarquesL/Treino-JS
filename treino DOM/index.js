class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo
        this.autor = autor
    }

    mostrarLivro() {
        return `Título: ${this.titulo}<br>Autor: ${this.autor}`
    }
}

function mostrar() {
    let pegarTitulo = document.getElementById("titulo").value

    let pegarAutor = document.getElementById("autor").value

    let livro1 = new Livro(pegarTitulo, pegarAutor)

    document.getElementById("resultado").innerHTML = livro1.mostrarLivro()
}




// class Livro {
//     constructor(titulo, autor) {
//         this.titulo = titulo
//         this.autor = autor
//     }

//     mostrarLivro() {
//         return `Título: ${this.titulo}\nAutor: ${this.autor}`
//     }
// }

// let livro1 = new Livro("Dom Casmurro", "Machado de Assis")

// console.log(livro1);

// console.log(livro1.mostrarLivro());



// class Produto {
//     constructor(nome, preco) {
//         this.nome = nome
//         this.preco = preco
//     }

//     mostrarProduto() {
//         return `Produto: ${this.nome}\n Preço: ${this.preco}`
//     }
// }

// function mostrar() {
//     let nomeProduto = document.getElementById("nome").value

//     let precoProduto = document.getElementById("preco").value

//     let produto1 = new Produto(nomeProduto, precoProduto)

//     document.getElementById("resultado").innerText = produto1.mostrarProduto()
// }












// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }


//     apresentar() {
//         console.log(`Olá meu nome é ${this.nome}`);
        
//     }
// }

// function mostrarPessoa() {
//     let texto = pessoa1.apresentar()

//     document.getElementById("resultado").innerText = texto
// }

// let pessoa1 = new Pessoa ("Carlos")


// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }

//     apresentar() {
//         return `Meu nome é ${this.nome}`
        
//     }
// }

// function mostrar() {
//     let nomeDigitado = document.getElementById("nome").value

//     let pessoa = new Pessoa(nomeDigitado)

//     let texto = pessoa.apresentar()

//     document.getElementById("resultado").innerText = texto
// }

// function mostrar() {
//     let nomeInput = document.getElementById("nome").ariaValueMax

//     let pessoa1 = new Pessoa (nomeInput)

//     let texto = pessoa1.apresentar()

//     document.getElementById("resultado").innerText = texto
// }

// function mostrar() {
//     let nomeInput = document.getElementById("nome").value 

//     let pessoa1 = new Pessoa(nomeInput)

//     let texto = pessoa1.apresentar()

//     document.getElementById("resultado").innerText = texto

// }


// function mostrar () {
//     let nomeDigitado = document.getElementById("nome").value 

//     let pessoa = new Pessoa(nomeDigitado)

//     let texto = pessoa.apresentar()

//     document.getElementById("resultado").innerText = texto
// }