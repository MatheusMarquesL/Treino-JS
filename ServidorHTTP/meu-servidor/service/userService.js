import { getUsuarios, getUsuariosById } from "../repository/userRepository.js";

export function listarUsuarios() {
    return getUsuarios()
}

export function buscarUsuario(id) {
    return getUsuariosById(id)
}