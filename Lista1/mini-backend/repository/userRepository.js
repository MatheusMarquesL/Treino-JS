export function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ nome: "João" })
        }, 2000);
    })
}