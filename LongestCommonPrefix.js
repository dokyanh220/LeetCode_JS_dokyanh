var longestCommonPrefix = function(strs) {
  for (let i = 0; i < strs[0].length; i++) {
    // Chữ đầu tiên phần tử[i]
    let str = strs[0][i]
    // console.log(`str = strs[0][${i}]:`, strs[0][i])
    // Lặp từng chữ của phần tử mảng strs
    for (let j = 1; j < strs.length; j++) {
      // console.log('🚀 ~ longestCommonPrefix ~ strs[j]:', strs[j])
      // console.log('🚀 ~ longestCommonPrefix ~ strs[j][i]:', strs[j][i])
      // console.log(`So sánh chữ[${j}] phần tử[${i}] không bằng str:`, strs[j][i] !== str)
      // console.log(`Độ dài ${i} >= strs[${j}].length:`, i >= strs[j].length)
      // Nếu chữ[j]phần tử[i] không bằng str hoặc phần tử[i] dài hơn phần tử(strs)[j].length
      if (strs[j][i] !== str || i >= strs[j].length) {
        // Cắt các chữ k đạt điều kiện
        console.log('strs[0]: ', strs[0],`.slice(0, ${i}):`, strs[0].slice(0, i))
        return strs[0].slice(0, i)
      }
    }
  }
  // Trả về phần tử đầu tiên
  // console.log('return strs[0]:', strs[0])
  return strs[0]
}

strs = ['flower', 'flow', 'fligth']
/**
 * str, strs[0][i]: f f
 * 
 */
console.log('🚀 ~ longestCommonPrefix ~ longestCommonPrefix:', longestCommonPrefix(strs))
