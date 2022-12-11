// Write a programs for size of LL -get first element of LL -get last element of LL

class LLNode{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor()
    {
        this.head=null
    }

create(data)
{
    const newNode= new LLNode(data);
    if(this.head==null)
    {
        this.head=newNode;
    }else
    {
        let current=this.head;
        while(current.next!=null)
        {
            current=current.next;
        }
        current.next=newNode;
    }
}
display()
{
    if(this.head==null){
        console.log("List is empty")
    }
    else
    {
        let current=this.head;
        while(current!=null){
            console.log(current.data);
            current = current.next;
        }
    }
}
}
var ll = new LinkedList()
ll.create(10);
ll.create(2);
ll.create(3);
ll.create(4);
ll.create(5);
console.log("Elements in the SLL are");
ll.display();

sizeof() 
{
    console.log("Size Of Linked List Is :-" 
   + this.size);
    }
   getFirst() 
   {
    console.log ("First element is :- "
    +this.head.data)
   }
   getLast()
    {
    if (!this.head) {
    return node;
    }
    let node = this.head;
    while (node) {
    if (!node.next) {
    console.log("Last Element is :- "+node.data)
    }
    node = node.next;
    }
   const LL = new linklist();
   LL.create("Dipak");
   LL.create("Vrushal");
   LL.create("Manoj");
   LL.display();
   LL.getFirst();
   LL.getLast();
   LL.sizeof();
}