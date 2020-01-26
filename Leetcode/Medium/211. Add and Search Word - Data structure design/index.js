/* 
Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)

search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

Example)

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
*/

// ES6 Class Solution

class WordDictionary {
  constructor() {
    this.root = {};
  }

  addWord = word => {
    // start with current node
    let currentNode = (this.root[word.length] = this.root[word.length] || []); // if current word is defined, then currentNode is an empty array
    currentNode.push(word);
  };

  search = word => {
    let wordArr = this.root[word.length] || false;

    if (!wordArr) return false;

    // Go over all added words that have n characters
    // Filter out words where every letter doesn't match with search or "."
    // Returns an array with all the matching words
    return (
      wordArr.filter(currentWord => {
        return currentWord
          .split("")
          .every((letter, i) => letter === word[i] || word[i] === ".");
      }).length > 0
    );
  };
}
