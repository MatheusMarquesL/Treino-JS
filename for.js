// for  (let i = 0; i < 5; i++) {
//     console.log(i);
// }


function someAte(n) {
    let soma = 0

    for (let i = 1;
        i <= n;
        i++
    ) {
        soma = soma + i
    }

    return soma
}

console.log(someAte(5));
