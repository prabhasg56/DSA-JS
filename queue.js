// Operations:-

// Enqueue
// Dequeue
// is_empty
// get_first_element - element present in the front of the the Queue.

class Queue {
    constructor(){
        this.front = -1;
        this.rear = -1;
        this.queue = []
    }

    enQueue(ele){
        if(this.rear === -1){
            this.rear++;
            this.front++;
        }else{
            this.rear++;
        }
        this.queue[this.rear] = ele;
    }

    deQueue(){
        if(this.front === -1 || this.front>this.rear){
            console.log("Queue is underflow");
            this.front = -1;
            this.rear = -1;
        }else{
            this.front = this.front+1;
        }
    }

    isEmpty(){
        if(this.rear === -1 || this.front>this.rear){
            console.log("Queue is underflow");
        }else{
            console.log("Queue is not empty");
        }
    }

    getFirstEle(){
        return this.queue[this.front];
    }


}

let qObj = new Queue();

qObj.enQueue(2);
qObj.enQueue(1);
qObj.enQueue(4);
qObj.enQueue(9);
console.log(`Queue is ${qObj.queue}`);
qObj.deQueue();
console.log(`After deleting front is ${qObj.front} and rear is ${qObj.rear}`);
qObj.isEmpty();
console.log(`First element is ${qObj.getFirstEle()}`);
