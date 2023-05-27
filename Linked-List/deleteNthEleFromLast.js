class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

const insertNode= (head, val) =>{
    newNode = new Node(val);
    newNode.next = head;
    return newNode;

}

const display = (head) => {
    let temp = head;
    while(temp!=null){
        console.log(temp.data);
        temp = temp.next
    }
}

let head = new Node(0);
head = insertNode(2,head);
head = insertNode(1,head);
head = insertNode(4,head);
// console.log(head)
display(head)