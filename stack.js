class Stack {
    constructor(){
        this.stack = [];
        this.top = -1; 
        this.minStack = [];
    }

    push(val){
        // if(!this.stack.length){
        //     this.top += 1;
        //     this.stack[this.top] = val;
        //     this.minStack[this.top] = val;  
        // }else{
        //     this.top += 1; 
        //     this.stack[this.top] = val;
        this.top += 1;
        this.stack[top]=val;
            if(this.top === -1 || val <= this.minStack[this.top])
            this.minStack[this.top] = val;

            // this.stack.push(val);
        // }
    }

    pop(){
        if(this.top !== -1){
            this.stack.pop();
           this.top = this.top -1;
        }
    }

    peek(){
        return this.stack[this.top];
    }

    isEmpty(){
        if(this.top === -1)
        return true;
        else
        return false;

    }

    printElement(){
        console.log(this.stack);
        console.log(this.minStack);
    }

}

let stkObj = new Stack();
stkObj.push(2);
stkObj.push(10);
stkObj.push(12);
stkObj.push(3);
stkObj.push(77);
stkObj.printElement();
stkObj.pop();
stkObj.push(88);
stkObj.pop();

stkObj.printElement();
console.log(stkObj.peek());
console.log(stkObj.isEmpty())