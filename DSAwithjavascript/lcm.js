let num1=2
let num2=5
let min=(num1>num2)?num1:num2
while (true) {
    if(min%num1==0&&min%num2==0){
        console.log(`lcm of ${num1} and ${num2} is ${min}`);
        break
    }
    min++
}                