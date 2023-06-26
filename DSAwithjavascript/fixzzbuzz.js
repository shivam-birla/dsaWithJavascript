// for(i=0;i<=100;i++){
//     let f=i%3==0&&i%5==0
//     let x=i%3==0
//     let c=i%5==0
//    let z= f?'fizzbuzz':''
//    let e= x?'fizz':''
//    let r= c?'buzz':''
//     console.log(z,e,r)
// }
// }
// let x='army'
// let y='ymra' 
// let z= y.split('').reverse().join('')
// y=z
//  if(x===y){
//     console.log(true)
//  }
// function palindrome(str) {
//     let str1=str.split('').reverse().join('')
//     console.log(str1===str)
// }
// palindrome('ramar')

// function sum(a){

// (function(b){
// return a+b
// })
// }
// sum((50)(20))
// let arr = [1, 2, 5, 9, 7, 8];
// let prev = arr[0]; 

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > prev) {
//    prev=arr[i]
//   }
//   else if(prev<arr[i]){

//   }
// }
// let arr = [1, 2, 5, 9, 7, 8];
// let max = arr[0]; // Assume the first element is the maximum

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i]; // Update max if a larger element is found
//   }
// }

// console.log("The largest element in the array is:", prev);


function isPalindrome(arr){
for(i=0;i<arr.length;i++){
  Element= String( arr[i])
reverseElement=Element.split('').reverse().join('')
if(Element!==reverseElement){
  return 0
}
 }
return 1
}
let arr=[121,222,333,444,555]
console.log(isPalindrome(arr))

