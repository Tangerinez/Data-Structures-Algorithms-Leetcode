/* 
When should I use which sorting algorithm???

- Insertion Sort:
    - Small input
    - Items are mostly sorted
- Merge Sort:
    - If you're worried about worst case scenarios, use Merge Sort for guaranteed O(nlogn) runtime
- Quick Sort:
    - If you want good space complexity
    - Use quick sort unless you're really worried about worst case O(n^2)
- Heap Sort:
    - On average, this is actually SLOWER than quick sort in most cases, even though it is O(nlogn) guaranteed
    - Use only when worst case AND memory is a huge concern


** Radix + Counting Sort **
    - If you have numbers that are within a certain range, radix/counting sort may be faster with O(nk)/O(n+k) runtime
        - Counting Sort: Elements range from 1 to k
*/

/* Sorting Interview Questions and Practice (Answers can vary) */

// #1 - Sort 10 schools around your house by distance:
// Answer: Insertion Sort
// Fast, easy to code, O(1) space complexity, and schools may already be kind of sorted

// #2 - eBay sorts listings by the current Bid amount:
// Answer: Radix/Counting Sort
// You know the range of the bid, so you we can try to beat the O(nlogn) runtime

// #3 - Sport scores on ESPN
// Answer: Quick Sort
// Most efficient, and more space complexity => If we used merge sort, there might be too much information

// #4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// Answer: Merge Sort
// Since we can't fit everything in memory and the data is so big, performance is a key priority, and we don't want the worst case runtime with quick sort

// #5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// Answer: Insertion Sort

// #6 - Temperature Records for the past 50 years in Canada
// Answer: Radix/Counting Sort (if the temperatures are integers with no decimals)
// Answer #2: Quick Sort, since we will have a lot of data and we can hopefully save on some space complexity

// #7 - Large user name database needs to be sorted. Data is very random.
// Answer: Merge Sort or Quick Sort
// With Quick Sort here, you may not be too concerned about worst case runtime. You can also pick a good pivot.

// #8 - You want to teach sorting for the first time
// Answer: Bubble Sort & Selection Sort
