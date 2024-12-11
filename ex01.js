// switch (true) {
//   case BMI < 18.5:
//     content: "hơi gầy";
//     break;
//   case BMI < 23:
//     content: "bình thường";
//     break;
//   case BMI < 25:
//     content: "hơi béo";
//     break;
//   default:
//     content;
//     "béo phì";
// }
// console.log(`chi so BMI cua ban la ${BMI}`);

function printDay(day) {
  switch (day) {
    case 0:
      return "Chủ nhật";
    case 1:
      return "thứ 2";
    case 2:
      return "thứ 3";
    case 3:
      return "thứ 4";
    case 4:
      return "thứ 5";
    case 5:
      return "thứ 6";
    default:
      return "thứ 7";
  }
}
console.log(printDay(1));

function printMonth(month) {
  switch (month) {
    case 0:
    case 1:
    case 2:
      return "quý I";
    case 3:
    case 4:
    case 5:
      return "quý II";
    case 6:
    case 7:
    case 8:
      return "quý III";
    case 9:
    case 10:
    case 11:
      return "Qúy I";
    default:
      return "Không hợp lệ";
  }
}
console.log(printMonth(0));
