// LEET 75- 1, 1768.

//Merge Strings Alternately

//You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

//Return the merged string.

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d
 

// Constraints:

// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.




// Given two words (strings), take alternate letters from each word and return a new word (string)

// if one word (string) is longer than other, (append) extra letters onto end of new word (merged string)

// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {string}
//  */
const mergeAlternately = (word1, word2) =>{
    let merged_string = "";
    let length1 = word1.length;
    let length2 = word2.length;
    let maxLength = Math.max(length1, length2);
    
    for (let i = 0; i < maxLength; i++) {
        if (i < length1) {
            merged_string += word1.charAt(i);
        }
        if (i < length2) {
            merged_string += word2.charAt(i);
        }
    }
    
    return merged_string;
};

const word1 = "abc";
const word2 = "pqrs";
const result = mergeAlternately(word1, word2);
console.log(result);

//declare function, takes arguments word1 and word2:

// const mergeAlternately = (word1, word2) =>{

//initialize empty string to hold merged string:
//     let merged_string = "";

//store length of word 1 and 2 in variables:

//     let length1 = word1.length;
//     let length2 = word2.length;
// determine longer of two words(strings) and store in variable:
//     let maxLength = Math.max(length1, length2);
//
//loop through words (strings) and add letters to merged string- will run length of longer string
//     for (let i = 0; i < maxLength; i++) {
    //check if current index, i, is less than length of word1- if condition is true, add letter at current index to merged string
//         if (i < length1) {
//             merged_string += word1.charAt(i);
//         }
// check if current index, i, is less than length of word2- if condition is true, add letter at current index to merged string
//         if (i < length2) {
//             merged_string += word2.charAt(i);
//         }
//     }
    
//     return merged_string;
// };

// const word1 = "abc";
// const word2 = "pqrs";
// const result = mergeAlternately(word1, word2);
// console.log(result);


// alternate- 82ms
// const mergeAlternately = (word1, word2) => {
//     let merged = '';
//     let i = 0;
//     while (i < word1.length || i < word2.length) {
//         if (i < word1.length) {
//             merged += word1[i];
//         }
//         if (i < word2.length) {
//             merged += word2[i];
//         }
//         i++;
//     }
//     return merged;
// }

// // const result = mergeAlternately('abc', 'pqr');
// // const result = mergeAlternately('ab', 'pqrs');
// const result = mergeAlternately('abcd', 'pq');
// console.log(result)

