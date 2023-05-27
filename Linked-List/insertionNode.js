class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

const insertBeg = (head, val) =>{
    newNode = new Node(val);
    newNode.next = head;
    return newNode;

}

const insertLast = (head, val) => {
    let newNode = new Node(val);
    let temp = head;
    while(temp.next!= null){
        temp = temp.next;
    }

    temp.next = newNode;
}

const insertNth = (head, val, k) => {
    let newNode = new Node(val);
    let temp = head;
    for(let i = 0; i<k-1; i++){
        temp = temp.next;
    }
    x = temp.next;
    temp.next = newNode;
    newNode.next = x;
}

const deleteNthFromLast = (head, n) => {
    let count = countNode(head);
    let temp = head;
    let itr = count - n;

    for(let i = 1; i<itr; i++){
        temp = temp.next;
    }
    let x = temp.next.next;
    temp.next = null;
    temp.next = x;

}

const countNode = (head) => {
    let temp = head;
    let count = 0;

    while(temp!=null){
        count++;
        temp = temp.next;
    }

    return count;
}
const display = (head) => {
    let temp = head;
    while(temp!=null){
        console.log(temp.data);
        temp = temp.next
    }
}



let head = new Node(3);
head =  insertLast(head,1);
insertLast(head,2);
insertLast(head,5);
insertLast(head,1);
insertLast(head,9);
insertLast(head,10);
insertLast(head,7);

deleteNthFromLast(head, 3);
// console.log(head)
// insertNth(head, 59, 2);
display(head);
// console.log(head)