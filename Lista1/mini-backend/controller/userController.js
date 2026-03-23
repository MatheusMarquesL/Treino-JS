import { buscarUsuarioService } from "../service/userService";

export async function buscarUsuarioController() {
    try {
        const user = await buscarUsuarioService()
        console.log(user)
    } catch (erro) {
        console.log(erro)
    }
}