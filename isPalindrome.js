// Cách 1
// var isPalindrome = function(x) {
//   x = x.toString().split('')
//   let length = x.length - 1

//   if(length === 0) return true

//   if(x[0] !== x[length]) return false

//   for(let i = 0; i < length/2; i++){
//     let j = length - i
//     if(x[i] !== x[j]) return false
//   }
//   return true
// }

// Cách 2
var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false
  let revertedNumber = 0
  
  while (x > revertedNumber) {
    // Lấy chữ số cuối và thêm vào số đảo ngược
    revertedNumber = revertedNumber * 10 + x % 10
    
    // Loại bỏ chữ số cuối khỏi số ban đầu
    x = Math.floor(x / 10);
  }

  // Nếu số chẵn: x === revertedNumber (ví dụ: x=12, rev=12)
  // Nếu số lẻ: x === Math.floor(revertedNumber / 10) (ví dụ: x=12, rev=123 -> 12)
  // console.log(x)
  // console.log(revertedNumber)
  return x === revertedNumber || x === Math.floor(revertedNumber / 10)
}

console.log(isPalindrome(10001))