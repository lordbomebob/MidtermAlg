
let q1a1 = [5,4,1,2];

function findMissingNumber(array,n){
    
    for(let i=1;i<=n;i++){
        let found=false
        
        for(let x=0;x<array.length;x++){
            if(array[x]==i){
                found=true
            }
        }
        if(!found){
            return i
        }
    }
}
function findMissingNumber2(array,n){
    let expSum=n*(n+1)/2
    let sum=0
    for(let x=0;x<array.length;x++){
        sum+=array[x]
    }
    return expSum-sum
}

let q2a1=[1,5,2,7]
let q2a2=[20,1,5,2,11]
function indiceAdd(array,target){
    
    for(let x=0;x<array.length;x++){
        for(let y=0;y<array.length;y++){
            if(x!=y){
                if((array[x]+array[y])==target){
                    
                    return [x,y]
                }
            }
        }
    }
}


function generatePermutation(str){
    
    let resultArr=[]
    for(let x=0;x<str.length;x++){
        resultArr.concat(permutation(str,x,0))
    }
    console.log(returnArr)

}
function permutation(str,x,y){
    if(y>=str.length){
        return [str]
    }
    let strArr=str.split()

    

}

class Node {
    constructor(data) {
        this.data = data; // Data on that node
        this.next = null; // Pointer to the next node
    }
    
}
let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30)
let node4 = new Node(40);


node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node1;

let node5 = new Node(10);
let node6 = new Node(20);
let node7 = new Node(30)
let node8 = new Node(40);

node5.next = node6;
node6.next = node7;
node7.next = node8;


function checkIfCycleExists(node){
    let history=[]
    let current=node
    while(current.next!=null && !history.includes(current.next)){
        history.push(current)
        current=current.next

    }
    
    if(history.includes(current.next)){
        return true 
    }
    return false
}
function checkIfValdidParenthesis(str){
    let stack=[]
    let map={
        "(":")",
        "{":"}",
        "[":"]"
    }
    for(let x=0;x<str.length;x++){
        if (str[x] === '(' || str[x] === '[' || str[x] === '{'){
            stack.push[str[x]]
        }else{
            if(str[x]!== map[stack.pop()]){
                return false
            }
        }
    }
    return stack.length === 0
}
function checkIfValdidParenthesis2(str){
    let current = 0
    let notInvalid=true
    while(current<str.length && notInvalid){
        if (str[current] === '(' || str[current] === '[' || str[current] === '{') {
            let index =valdidParenthesis(str,current++)
            if(!index.isNan()){
                current=index
            }else{
                notInvalid=index
            }
            
        }
        current++
    }
    return notInvalid
}
function valdidParenthesis(str,s){
    let map={
        "(":")",
        "{":"}",
        "[":"]"
    }
    if (str[s] === '(' || str[s] === '[' || str[s] === '{') {
        return valdidParenthesis(str,s++)
    }else{
        if(str[s]==map[str[s--]]){
            return s
        }
        return false
    }
}