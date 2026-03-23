import { getUser } from "../repository/userRepository"

export async function buscarUsuarioService() {
    return await getUser()
}