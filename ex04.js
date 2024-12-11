
function checkPrime(n){
let i = 2;
while(i<n){
    if(n % i ===0){
        console.log(`gia tri cua n: ${n}, gia tri cua i: ${i}`)
        return false;
    }
    i++;
}
return true;

}
function PrintPrime(n){
    let i=2;
    while(i<n){
        checkPrime(i) && console.log(i);
    }
}
PrintPrime(10);


let index =10;
do{
  console.log(index);
  index ++;
}while(index <=5)