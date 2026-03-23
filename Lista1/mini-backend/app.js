import { buscarUsuarioController } from "./controller/userController";

function buscarMensagem() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Operação concluída")
        }, 2000);
    })
}

buscarMensagem()
    .then((msg) => console.log(msg))
    .catch((erro) => console.log(erro))

async function executar() {
    try {
        const msg = await buscarMensagem()
        console.log(msg);
    } catch (erro) {
        console.log(erro)
    }
}

executar()

function buscarUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Erro ao buscar usuário")
        }, 2000);
    })
}

async function executarUsusario() {
    try {
        const user = await buscarUsuario()
        console.log(user)
    } catch (erro) {
        console.log(erro);
    }
}

executarUsusario()



buscarUsuarioController()