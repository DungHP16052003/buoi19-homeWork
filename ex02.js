for(let i =0; i<10; i++){
    console.log(`gia tri cua ${i}`);
}


//

function checkPrime(n){
    for(let i =2; i<n; i++){
        if(n % i ===0){
            return false;
        }
    } 
    return true;  
}
function PrintPrime(n){
    for(let i = 2; i<=n;i++){
        checkPrime(i) && console.log(i);
    }
 
 //bỏ qua validation
    
}
PrintPrime(10);