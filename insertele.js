//Write a program to insert an element in a single LL (3 types)

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
    }else{
        let current=this.head;
        while(current.next!=null){
            current=current.next;
        }
        current.next=newNode;
    }
}
display()
{
    if(this.head==null){
        console.log("List is empty")
    }else
    {
        let current=this.head;
        while(current!=null){
            console.log(current.data);
            current = current.next;
        }
    }
}

insertfront(data)
{
    let newNode = new LLNode(data);
    newNode.next = this.head;
    this.head=newNode;
}

insertend(data)
{
    let newNode= new LLNode(data);
    let l = this.head;
    while(l.next!=null)
    {
        l=l.next;
    }
    l.next=newNode;
    newNode.next=null;
}

insertbetween(data,pos)
{
    let newNode= new LLNode(data);
    let l= this.head;
    for(let i=1;i<pos-1&&l.next!=null;i++)
    l=l.next;
    newNode.next=l.next;
    l.next=newNode;
}
}
var ll = new LinkedList()
ll.create(10);
ll.create(2);
ll.create(3);
console.log("Elements in the SLL are");
ll.display();

console.log("Elements after insertion at front:");
ll.insertfront(20);
ll.display();

console.log("Elements after insertion at end:");
ll.insertend(30);
ll.display();

console.log("Elements after insertion in between:");
ll.insertbetween(40,3);
ll.display();