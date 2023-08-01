//LEET 75-2- 1071- Greatest Common Divisor of Strings

// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
 

// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.

// pseudo code

// has to have 1-1000 letters, only uppercase 
// finding greatest common divisor of letters

// Example 1:
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// declare a function that takes in two strings (str1, str2)

// within that, need function that will take s and t

// need function that will take two letters and return the greatest common divisor, s, t

// then check if greatest common divisor is in both strings

// if it is return the greatest common divisor

// github copilot solution, not mine:

const  gcdOfStrings = (str1, str2) => {
    let gcd = (s, t) => {
        if (t === 0) return s;
        return gcd(t, s % t);
    }
    let len = gcd(str1.length, str2.length);
    let str = str1.slice(0, len);
    if (str.repeat(str1.length/len) === str1 && str.repeat(str2.length/len) === str2) return str;
    return "";
}

console.log(gcdOfStrings("ABCABC", "ABC"))

