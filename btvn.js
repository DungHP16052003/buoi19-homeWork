//bài 1
function issquareNumber(num) {
  const sqrt = Math.sqrt(num);
  return sqrt === Math.floor(sqrt);
}
function printsquareNumber() {
  const n = parseInt(prompt("Nhập số nguyên dương n: "));

  if (isNaN(n) || n <= 0) {
      console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
      return;
  }

  console.log(`Các số chính phương từ 1 đến ${n} là:`);
  for (let i = 1; i <= n; i++) {
      if (issquareNumber(i)) {
          console.log(i);
      }
  }
}


printsquareNumber();

    
// bài 2
function multiplicationTable(){
    for(let i =1; i <= 10; i++){
         let table = `bang cuu chuong ${i}:\n`;   
    for(let j = 1; j <=10; j++ ){
     table += `${i} x ${j} = ${i * j}\n `;
    }
   console.log(table);
  }
}
multiplicationTable();

