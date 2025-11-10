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

// Biến debug
let loopCount = 0
var addTwoNumbers = function(l1, l2) {
  // Tạo 1 listNode giả chứa kết quả
  const result = new ListNode(0)
  
  // Vị trí của node đang đứng trong listNode
  let currentResultNode = result
  
  // Biến nhớ (carry), ban đầu = 0
  let carry = 0
  
  // Vòng lặp while qua hết l1, l2 và không còn carry
  while (l1 || l2 || carry > 0) {
    loopCount++
    console.log(`LoopCount ${loopCount}`)
    // Lấy giá trị của node mỗi vòng lặp, không có gì(null) thì = 0
    const currentL1Val = l1 ? l1.val : 0
    const currentL2Val = l2 ? l2.val : 0

    // Cộng hai node và carry
    const sum = currentL1Val + currentL2Val + carry
    /**
     * loop1: 2 + 5 + carry (carry == 0)
     * loop2: 4 + 6 + carry (carry == 0), tính toán carry ở dưới
     * loop3: 3 + 4 + carry (carry == 1)
     */

    // Tạo node mới chứa kết quả của loop hiện tại
    currentResultNode.next = new ListNode(sum % 10)
    /**
     * result loop1: 7 + carry
     * result loop2: 10 % 10 = 0 + carry
     * result loop3: 7 + carry
     */

    // Di chuyển con trỏ đến node chứa kết quả vừa tạo
    currentResultNode = currentResultNode.next

    // Cập nhật phần nhớ (carry), Ví dụ: 10 / 10 = 1
    carry = Math.floor(sum / 10)

    // Di chuyển l1 và l2 nếu còn node, tiếp tục tính toán
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }

  // Trả về danh sách kết quả, bỏ node giả
  return result.next
}

l1 = [7,2,4,3]
l2 = [5,6,4]
const listNode1 = createListNode(l1)
const listNode2 = createListNode(l2)
const rs = addTwoNumbersII(listNode1, listNode2)
console.log('Result:')
console.log('🚀 ~ addTwoNumber ~ addTwoNumber:', printListNode(rs))