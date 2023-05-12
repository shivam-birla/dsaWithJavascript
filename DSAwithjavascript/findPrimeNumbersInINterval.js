let x = 100
let y = 200
let isPrime = true
for ( let i = x; i <= y; i++) {
    let flag = 0
    for (let  j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1
            break
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i)
    }
}
