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

deletefront()
{
    console.log("The element deleted is:", this.head.data)
    this.head= this.head.next;
    
}

deleteend()
{
    let p=this.head;
    while(p.next!=null)
    {
        var q=p;
        p=p.next
    }
    q.next=null;
    console.log("the element deleted is:",p.data)
}

deletebetween(pos)
{
    let p=this.head;
    for(let i=1; i<pos && p!=null; i++)
    {
        var q=p;
        p=p.next;
    }
    q.next=p.next;
    console.log("the element deleted is:",p.data)
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

console.log("Elements after deletion at front:");
ll.deletefront();
ll.display();

console.log("Elements after deletion at end:");
ll.deleteend();
ll.display();

console.log("Elements after deletion in between:");
ll.deletebetween(2);
ll.display();