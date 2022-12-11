class Node {
    constructor(data, next = null) { 
    this.data = data;
    this.next = next;
    }
   }
   class LinkedList {
    constructor() {
    this.head = null;
    this.size = 0;
    }
    create(data) {
    const node = new Node(data);
    if (this.head == null) {
    this.head = node;
    } else {
    let current = this.head;
    while (current.next != null) {
    current = current.next;
    }
    current.next = node;
   }}
    display() {
    if (this.head == null)
    console.log("List Is Empty")
    else {
    let current = this.head;
    while (current != null) {
    console.log(current.data);
    current = current.next;
    }}}}
   const LL = new LinkedList();
   LL.create(10)
   LL.create(20)
   LL.display()

function sortedMerge(headA,headB) {
    let dummyNode = new Node(0);
    let tail = dummyNode;
    while(true)
    
   {
    if(headA == null)
    
   {
    tail.next = headB;
    break;
    
   }
    if(headB == null)
    
   {
    tail.next = headA;
    break;
    
   }
    
    if(headA.data <= headB.data)
    
   {
    tail.next = headA;
    headA = headA.next;
    
   }
    else
    
   {
    tail.next = headB;
    headB = headB.next;
    
   }
    
    tail = tail.next;
    
   }
    return dummyNode.next; }
   const l1 = new LinkedList();
   l1.create(10)
   l1.create(20)
   console.log("First Linked List")
   l1.display()
   const l2 = new LinkedList();
   l2.create(30)
   l2.create(40)
   console.log("Second Linked List")
   l2.display()
   console.log("Merged Linked List")
   l1.head = sortedMerge(l1.head , l2.head);
   l1.display()