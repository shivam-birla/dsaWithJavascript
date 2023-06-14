let x='rajesh'
let a
for(i=0;i<x.length;i++){
   let y= x[0].toUpperCase()
  let z=x.slice(1,x.length)
   a=y.concat(z)
}
console.log(a)