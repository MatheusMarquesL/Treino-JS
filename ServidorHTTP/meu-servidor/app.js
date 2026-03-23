import http from "http"
import { handleUsuarios, handleUsuariosById } from "./controller/userController.js"

const server = http.createServer((req, res) => {
    const url = req.url

    if(url === "/usuarios") {
        return handleUsuarios(req, res)
    }

    if(url === "/usuarios/1") {
        return handleUsuariosById(req, res, 1)
    }

    if(url === "/usuarios/2") {
        return handleUsuariosById(req, res, 2)
    }

    res.writeHead(404, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ mensagem: "Rota não encontrada" }))
})

server.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
     
})