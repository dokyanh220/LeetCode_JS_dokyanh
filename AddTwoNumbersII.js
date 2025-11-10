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

var addTwoNumbersII = function(l1, l2) {
  let head = null
  const stack1 = []
  const stack2 = []
  let carry = 0

  while(l1) {
    stack1.push(l1.val)
    l1 = l1.next
  }

  while(l2) {
    stack2.push(l2.val)
    l2 = l2.next
  }

  while(stack1.length > 0 || stack2.length > 0 || carry > 0) {
    let x = stack1.length > 0 ? stack1.pop() : 0
    let y = stack2.length > 0 ? stack2.pop() : 0
    let sum = x + y + carry
    carry = Math.floor(sum / 10)

    let node = new ListNode(sum % 10)
    node.next = head
    head = node
  }

  return head
}