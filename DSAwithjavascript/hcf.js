let a=27
let b=100
let x
let prev=[]
if(a>b){
 x=a
}else{
     x=b
}
for(i=0; i <= x ; i++){
if(a%i===0&&b%i===0){
    prev.push(i)
}

}
let hcf=prev.pop()
console.log(hcf)