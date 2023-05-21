let number=153
let temp=number;
sum=0
while (temp>0) {
    reminder=temp%10
    sum+=reminder*reminder*reminder
    temp=parseInt(temp/10)
}
if (sum===number) {
    console.log('the number', number ,'is armstrong number');
    
}
else{
    console.log(`number is not armstrong number`);
}