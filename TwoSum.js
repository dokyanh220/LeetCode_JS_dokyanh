// Cách 1
// var twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i+1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// }

// Cách 2
var twoSum = function(nums, target) {
  // Lấy map lưu trữ các số đã đi qua
  const visitedNum = new Map()
  for (let i = 0; i < nums.length; i++) {
    // Target - giá trị index hiện tại để lấy số hạng còn lại
    const neededNum = target - nums[i]
    // Tìm index có giá trị bằng với neededNum
    const indexOfNeededNum = visitedNum.get(neededNum)
    // IndexOfNeededNum không thể >= 0 vì đề bài yc: không sử dụng 1 phần tử 2 lần
    if (indexOfNeededNum >= 0) {
      return [i, indexOfNeededNum]
    }
    // Lưu lại các giá trị và index đã đi qua
    visitedNum.set(nums[i], i)
  }
}

nums = [2,7,2,7]
target = 9
console.log('🚀 ~ twoSum(nums, target):', twoSum(nums, target))
