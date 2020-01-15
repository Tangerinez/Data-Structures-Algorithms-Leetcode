/*
Both are Linear data structures that allow us to traverse sequentially (only 1 data item reached)
- Usually can only access the first or last element

Stacks:
- LIFO (Last item in is the First out)
Ex) Browser History

- lookup: O(n)
- pop: O(1) => Remove last item
- push: O(1) => Add a plate
- peek: O(1) => view the top-most item


Queues:
- FIFO (First item in the queue is first one out)
Ex) Waitlist app, Uber/Lyft, Printers

- lookup: O(n)
- enqueue: O(1) => add to the queue (end of the queue)
- dequeue: O(1) => remove from the queue (beginning of queue)
- peek: O(1) => view the first item

Why would you not want to use an array to build a queue?
- Very inefficient
- With arrays, you have to shift over the indices if you remove an item
*/

// Exercise - Stacks
/* Linked Lists or Arrays?
    - Arrays:
        - Cache locality (items in memory are next to each other => faster to access)
        - Arrays have certain amount of memory
            - Once they run out of memory they have to double up their space to create more memory
    - Linked Lists:
        - Scattered items in memory
        - Extra memory 
        - More dynamic memory (you can keep adding things to the list and the memory will dynamically allocate itself)
*/

// Exercise - Queues
/* Linked Lists or Arrays? 
    - Always use a Linked List!
        - With Linked List, you don't have to shift over indices every time you add/remove an item from the Queue 
        - O(1)
*/
