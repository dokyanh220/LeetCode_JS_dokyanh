var romanToInt = function(s) {
  const romanListNumber = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }
  let result = 0
  // Tạo mảng mới, map qua từng chữ roman và chuyển thành number
  const newMap = []
  s.split('').map(n => {
    newMap.push(romanListNumber[n])
  })
  // Tính kết quả
  for (let i = 0; i < newMap.length; i++) {
    // Kiểm tra có số đằng sau và điều kiện
    if (newMap[i + 1] && newMap[i + 1] > newMap[i]){
      result += newMap[i + 1] - newMap[i]
      i++
    } else {
      result+=newMap[i]
    }
  }

  return result
}

console.log('🚀 ~ romanToInt ~ romanToInt:', romanToInt('IVI'))
