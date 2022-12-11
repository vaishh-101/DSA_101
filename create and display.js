//Write a program to create and display a single LL.

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