/* 
In a Binary Heap, every node on the top level has a greater value than the every node down
// A heap can be used in any algorithm where ordering is important
// Left and Right child node just have to be less than the parent, so they don't necessarily have to be ordered a certain way
// Take up as much space as possible (no balancing needed) => Preserve order of insertion
// Left to Right insertion


// Use Cases:
    // Great for comparitive operations, you only have to go down a specific level until you get what you're looking for

lookup: O(n)
insert: O(logN)
delete: O(logN)

// Memory Heap !== Heap Data Structure!

Pros:
    - Better than O(n)
    - Priority 
    - Flexible Size
    - Faster insert
Cons:
    - Slow lookup
*/

/* Priority Queues */
// Type of data where each element has a priority - elements with a higher priority are served before those with a lower priority
