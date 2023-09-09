

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

// approach
// take the string and split it into an array?
// take last element of array and return length of said element



const lenOfLast = (s) => {
        let  arr= s.split(' ')
        let last = arr[arr.length -1]
        return last.length
    }


    console.log(lenOfLast("Hello World"))
    console.log(lenOfLast("fly me to the moon"))
    console.log(lenOfLast("luffy is still joyboy"))

    