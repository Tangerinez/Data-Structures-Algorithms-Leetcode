Important Data Structures:

- Arrays
- Hash Table
- Linked List
- Stacks + Queues
- Trees
- Tries
- Graphs

- You can put things in Data Structures and take things from them
- There are always tradeoffs with Data Structures!

- To understand Data Structures, you need to understand:

  - 1. How to build one
  - 2. How to use one

- Operations that can be performed on Data Structures
  - Insertion: Add a new data item
  - Deletion: Delete data
  - Traversal: Access each data item exactly once
  - Searching: Find the location of the data item to see if it exists
  - Sorting: Sort our data
  - Accessing: Access our data

How Computers Store Data

- Computer is run by its CPU (processor)
  - Accesses RAM faster than Storage
  - CPU is connected to Memory Controller, which reads and writes from/to the RAM
  - Cache: Stores a copy of stuff that is very recent
- Variables are stored in RAM (Random Access Memory)/memory (non-persistent data)
  - RAM is like a massive storage area
    - Has "shelves" called addresses
      - Each "shelf"/address has 8 Bits, or 1 Byte (1s and 0s)
      - A bit is a small electrical switch that can be turned on/off(1/0)
- Storage: Video files, music files, documents, saved things (persistent data - slower)

Example)
var a = 1
00000000000000000000000000000001
For the integer 1, it is stored as 31 0s and a 1, or 32 bits in RAM

var b = 7
00000000000000000000000000000111

Math.pow(6,1000) => Infinity
Number becomes too large to store in RAM (overflow)

_Point_ Each data type has a number of bits that are associated with it, which the CPU reads and interprets

- Our goal is to minimize the operation that we need to do for the CPU to get and write information from RAM

**Pros and Cons of Arrays**
Pros:

- Fast Lookups
- Fast push/pop
- Ordered

Cons:

- Slow inserts
- Slow deletes
- Fixed size if using static array
