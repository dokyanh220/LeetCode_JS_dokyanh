// Định nghĩa cấu trúc 1 node trong Linked List
function ListNode(val, next) {
  // Giá trị của node (mặc định 0 nếu không truyền vào)
  this.val = (val === undefined ? 0 : val)
  // Con trỏ trỏ tới node tiếp theo (mặc định null)
  this.next = (next === undefined ? null : next)
}

function createListNode(nums) {
  // Dummy head: node giả để tiện thao tác
  const result = new ListNode(0)
  // Con trỏ hiện tại đang trỏ vào node giả
  let head = result

  // Duyệt qua từng phần tử trong mảng
  for (let i = 0; i < nums.length; i++) {
    // Tạo node mới chứa giá trị nums[i]
    head.next = new ListNode(nums[i])
    // Di chuyển con trỏ sang node mới tạo
    head = head.next
  }

  // Trả về node đầu thật (bỏ qua node giả)
  return result.next
}

function printListNode(node) {
  // Tạo mảng chứa các giá trị của list
  const values = []

  // Duyệt đến khi hết list
  while (node) {
    // Thêm giá trị node hiện tại vào mảng
    values.push(node.val)
    // Chuyển sang node tiếp theo
    node = node.next
  }

  // Ghép các giá trị thành chuỗi có dấu "->" giữa các số
  return values.join(' -> ')
}

var removeNthFromEnd = function(head, n) {
  // Tạo node giả vào head, giúp xử lý trường hợp xóa node đầu tiên
  let dummy = new ListNode(0, head) // dummy -> head
  // Tạo 2 con trỏ đứng tại dummy
  let back = dummy
  let front = dummy

  // Biến đếm index
  let backIndex = 0
  let frontIndex = 0

  // Con trỏ front chạy trước 'n+1' 1 bước, n là vị trí xóa, back sẽ đứng trước n (n+1)
  for (let i = 0; i <= n; i++) {
    front = front.next
    frontIndex++
  }
  console.log(`Sau khi front chạy trước: frontIndex = ${frontIndex}, frontVal = ${front.val}, backIndex = ${backIndex}`)

  // Di chuyển 2 con trỏ đến khi hết danh sách
  while(front!=null) {
    back = back.next
    backIndex++
    front = front.next
    frontIndex++
    console.log(`frontIndex = ${frontIndex}, backIndex = ${backIndex}, back.val = ${back.val}`)
  }

  console.log(`Vị trí xóa: backIndex = ${backIndex}, node cần xóa: ${back.next.val}`)
  back.next = back.next.next

  return dummy.next
}

nums = [1,2,3,4,5]
const head = createListNode(nums)
const result = removeNthFromEnd(head, 2)
console.log('🚀 ~ head:', printListNode(result))
// console.log('🚀 ~ removeNthFromEnd(head, 2):', removeNthFromEnd(head, 2))
