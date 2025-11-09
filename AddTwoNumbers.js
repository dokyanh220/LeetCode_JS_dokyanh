function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function createListNode(nums) {
  const result = new ListNode(0)
  let head = result
  for (let i = 0; i < nums.length; i++) {
    head.next = new ListNode(nums[i])
    head = head.next
  }
  return result.next
}

function printListNode(node) {
  const values = []
  while (node) {
    values.push(node.val)
    node = node.next
  }
  return values.join(' -> ')
}

var addTwoNumber = function(l1, l2) {
  const result = new ListNode(0)
  let currentResultNode = result
  let carry = 0

  while (l1 || l2 || carry > 0) {
    const currentL1Val = l1 ? l1.val : 0
    const currentL2Val = l2 ? l2.val : 0

    const sum = currentL1Val + currentL2Val + carry
    currentResultNode.next = new ListNode(sum % 10)
    currentResultNode = currentResultNode.next

    carry = Math.floor(sum / 10)
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }
  return result.next
}

l1 = [2,4,3]
l2 = [5,6,4]
const listNode1 = createListNode(l1)
const listNode2 = createListNode(l2)
const rs = addTwoNumber(listNode1, listNode2)
console.log('🚀 ~ addTwoNumber ~ addTwoNumber:', printListNode(rs))