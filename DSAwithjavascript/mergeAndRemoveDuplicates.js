//#first solution
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr1 = [10, 2, 11, 5, 50];
let final = arr.concat(arr1);
let finalset = new Set(final);
console.warn(finalset);

//---------x-----------------
//#second solution
let obj = {};
let obj1 = {};
for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) {
    obj[arr[i]]++;
  } else {
    obj[arr[i]] = 1;
  }
}
for (let i = 0; i < arr1.length; i++) {
  if (obj1[arr[i]]) {
    obj1[arr1[i]]++;
  } else {
    obj1[arr1[i]] = 1;
  }
}
let array={}
for(let item in obj){
if(array[item]){
array[item]++
}
else{
    array[item]=1
}
}
for(let item in obj1){
if(array[item]){
array[item]++
}
else{
    array[item]=1
}
}
console.warn(Object.keys(array));

