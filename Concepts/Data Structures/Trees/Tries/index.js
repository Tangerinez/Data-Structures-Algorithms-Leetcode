/* 
Specialized tree used in searching for text
- In most cases, it can outperform binary search trees, hash tables, etc.
- Allows you to know if a word (or part of a word) exists in a body of text
- Another name: "Prefix Tree"
- Used for a lot of search engines

// Empty root node
// Letters are added as children (usually 26 children)

Pros:
    - Speed and space

Runetime Complexity: O(length of word) => O(1)
Space Complexity is saved due to saving prefixes
*/

/* Ex) If we search for a letter N in our trie, and that letter only has 2 children,
that means that there are 2 words that start with N
*/
