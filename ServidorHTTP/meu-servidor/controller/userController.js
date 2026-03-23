import { listarUsuarios, buscarUsuario } from "../service/userService.js";

export function handleUsuarios(req, res) { 
    const usuarios = listarUsuarios()

    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(usuarios))
}

export function handleUsuariosById(req, res, id) {
    const usuario = buscarUsuario(id)

    if (!usuario) {
        res.writeHead(404, { "Content-Type": "application/json" })
        return res.end(JSON.stringify({ mensagem: "Usuário não encontrado" }))
    }

    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(usuario))
}