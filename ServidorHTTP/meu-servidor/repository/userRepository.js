const usuarios = [
    { id: 1, nome: "João" },
    { id: 2, nome: "Maria" }
]

export function getUsuarios() {
    return usuarios
}

export function getUsuariosById(id) {
    return usuarios.find(u => u.id === id)
}