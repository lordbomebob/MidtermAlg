//Question1: Reverse an Integer (5 MARKS)
//Given an integer x, return the integer obtained by reversing the digits
//of x.
//If its a negative number , the sign should preserve
//Test Case 1: Positive Number
//● Input: x = 123
//● Expected Output: 321
//● Explanation: The digits of 123 are reversed to 321.

function reverseInt(x){
    let nums = x.toString().split('')
    let reverse=[]
    if(nums[0]==='-'){
        reverse.push(nums.splice(0,1))
    }
    let y=nums.length
    for(let i=0;i<y;i++){
        reverse.push(nums.pop())
    }
    return reverse.join('')
}
console.log(reverseInt(123))

//Test Case 2: Negative Number
//● Input: x = -456
//● Expected Output: -654
//● Explanation: The digits of -456 are reversed to -654, with the
//negative sign preserved.
console.log(reverseInt(-456))

//Question 2: Given a sorted array of distinct integers and a target
//value, return the index if the target is found. If not, return the index
//where it would be if it were inserted in order.( 5 MARKS)
//Test Case 1: Target is in the array
//● Input: nums = [1, 3, 5, 6], target = 5
//● Expected Output: 2
//● Explanation: The target 5 is found at index 2.
//Test Case 2: Target is not in the array (insert position in
//between)
let nums=[1,3,5,6]
function whereIndex(nums,x){
    if(nums.includes(x)){
        let left=0
        let right= nums.length-1
        while(left <= right){
            const mid= Math.floor((left+right)/2)
            if(nums[mid]=== x){
                return mid
            }else if(nums[mid]< x){
                left=mid+1
            }else{
                right = mid-1
            }
        }
    }else{
        
        let left=0
        let right= nums.length-1
        if(x>nums[right]){
            return right+1
        }
        if(x<nums[left]){
            return 0
        }
        //find middle first then make right or left middle
        let notFound=true
        while(notFound){
            
            if(x<nums[left] && x>nums[right]){
                notFound=false
                return left
            }
            if(x>nums[left]){
                left++
            }
            if(x<nums[right]){
                right--
            }
        }

        
    }

}

whereIndex(nums,5)


//● Input: nums = [1, 3, 5, 6], target = 2
//● Expected Output: 1
//● Explanation: The target 2 is not found, but it would be inserted
//at index 1.
whereIndex(nums,2)
//Question3: Delete Node in a Linked List (5 MARKS)
//Write a function to delete a node (except the tail) in a singly
//linked list, given only access to that node.
//Test Case 1: Basic Deletion
//● Input:
//○ Linked List Node: 4 , where linked list is 4 -> 5 -> 1 -> 9
//○ Node to delete: 5
//● Output:
//○ Linked List: 4, where linked list should become 4 -> 1 -> 9
class Node {
    constructor(data) {
        this.data = data; // Data on that node
        this.next = null; // Pointer to the next node
    }
}
function traverseNodes(node) {
    let str = '';
    while(node !== null) {
        str = str + node.data + ' -> ';
        node = node.next;
    }

    console.log(str + ' null '); // 10 -> 20 -> 30 -> 40 -> 50 -> null
}
let node1 = new Node(4);
let node2 = new Node(5);
let node3 = new Node(1);
let node4 = new Node(9);
node1.next = node2;
node2.next = node3;
node3.next = node4;
function deleteTarget(node,data){
    let prev=null
    let current=node
    let next = node.next
    while(next != null){
        console.log(current.data)
        if(current.next.data===data){
            current.next=next.next
            return true
        }
        current=next
        next=next.next
    }
    return false
}
traverseNodes(node1)
deleteTarget(node1,5)
traverseNodes(node1)


//Test Case 2: Basic Deletion
//● Input:
//○ Linked List Node: 4 , where linked list is 4 -> 5 -> 1 -> 9
//○ Node to delete: 4
//● Output:
//○ Linked List: 5, where linked list should become 5 -> 1 -> 9



//Question4: Find all the duplicates in an array and return which
//is the smallest one. (5 MARKS)
//Test Case 1:
//Input:
//○ Given array: [4, 10, 5, 1, 11, 5, 1, 4, 1]
//● Output:
//○ 1
let smallNums=[4, 10, 5, 1, 11, 5, 1, 4, 1]
function findSmallestDup(arr){
    if(!arr){
        return false
    }
    let base = []
    let smallest= Infinity
    arr.forEach(x => {
        if(!base.includes(x)){
            base.push(x)
        }else{
            if(x<smallest){
                smallest=x
            }
        }
        
    });
    return smallest
}
function betterFindSmallestDup(arr){
    if(!arr){
        return false
    }
    const sortedArr=arr.sort()
    let counting=1
    let current=sortedArr[0]
    let next=sortedArr[counting]
    let keepGoing=true
    while(keepGoing){
        if(current===next){
            keepGoing=false
            return current
        }
        current=next
        counting++
        next=sortedArr[counting]
    }
}
betterFindSmallestDup(smallNums)
//findSmallestDup(smallNums)
//Test Case 2:
//Input:
//○ Given array: [1, 10, 1, -1, 10, -1]
//● Output:
//○ -1
let smallNums2=[1, 10, 1, -1, 10, -1]
betterFindSmallestDup(smallNums2)
//findSmallestDup(smallNums2)
//MULTIPLE CHOICE QUESTIONS (Each 2 Marks)
let question=1
//Which type of search is efficient on a sorted array?
//● A) Linear Search
//● B) Binary Search
//● C) Hash Search
//● D) Exponential Search
//// Your answer:
console.log(`Question ${question} = B`)
question++
//What is the time complexity of inserting a new node at the
//beginning of a singly linked list?
//● A) O(1)
//● B) O(n)
//● C) O(log n)
//● D) O(n log n)
//// Your answer:
console.log(`Question ${question} = A`)
question++
//In a binary search tree (BST), the left child of a node is always:
//● A) Greater than the node
//● B) Smaller than the node
//● C) Equal to the node
//● D) Random compared to the node
console.log(`Question ${question} = B`)
question++
//Which traversal of a BST visits nodes in ascending order?
//● A) Pre-order
//● B) Post-order
//● C) In-order
//● D) Level-order
console.log(`Question ${question} = C`)
question++
//In a doubly linked list, what does the prev pointer in the first
//node point to?
//● A) The last node
//● B) Null
//● C) The second node
//● D) The middle node
console.log(`Question ${question} = B`)
question++