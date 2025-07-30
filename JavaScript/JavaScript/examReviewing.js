// Write a function that takes a string and returns the longest substring without repeating characters. -3
// Example:
//Input:"abcabcbb"
//Output:"abc"

//Write a function that takes an array of numbers and returns the product of al the numbers using a for..of loop(a product is a number or a quantity //obtained by multiplying two or more numbers together). -238
//Example:
//Input:[1,2,3,4]
//Output:24

// Write a function that takes an object and returns an array of its values sorted in ascending order using a for...in loop.
// Example:
// //Input:{a:3,b:1,c:2}
// //Output:[1,2,3]

// Write a function findMedian that takes an array of numbers  and returns the median value. The median is the middle value in set of numbers, wehere half of the numbers are above it and half are below it.
// Example:
// //Input:[1,2,3,4,5]
// //Output:3

// Write a function that takes an array of numbers and returns a new array with only the prime numbers. A prime number is a positive integer that can be divided by itself and 1.
// Example:
// //Input:[1,2,3,4,5,6,7,8.9.10]
// //Output:[2,3,5,7]

// Write a function rotateArray that rotates an array to the right by a given number n.
// Example:
// //Input: rotateArray([1,2,3,4,5]2)
// //Output:[4,5,1,2,3]

// Write a function longestPalindrome that takes a string and returns the longest palindromic substring within it.
// Example:
// //Input:"babad"
// //Output:"bab" or"aba"

// Write a function chunkArray that splits an array into chunks of a specified size.
// Example:
// //Input:chunkArray([1,2,3,4,5]2)
// //Output:[[1,2],[3,4],[5]]

// NotRequirePullRequest

const longestSubstrWithoutRepeatingChar = (string) =>{
    let charIndexStorage = {}; 
    let maxLength = 0;
    let start = 0;
    let longestSubstring = '';

    for(let end = 0; end < string.length; end++){
        const currentChar = string[end];

        if(charIndexStorage[currentChar] !== undefined && charIndexStorage[currentChar] >= start){
            start = charIndexStorage[currentChar] + 1;
            // もし今見ている文字が既にcharIndexStorageに存在している場合、スタート位置をその文字からとして新しい部分文字列をcharIndexStorageに格納する。
            // charIndexStorageはオブジェクトであるからkey:valueペアで部分文字列が格納される(keyがstart,valueがcurrentChar)。startは所謂idのような働きをしている。
        }

        charIndexStorage[currentChar] = end;

        const currentLength = end - start + 1;
        if(currentLength > maxLength){
            maxLength - currentLength;
            longestSubstring = string.substring(start,end + 1);
        }
    }
    return longestSubstring;
}

console.log('Longest Substring:',longestSubstrWithoutRepeatingChar('abcbfeghijka'));
console.log('Longest Substring:',longestSubstrWithoutRepeatingChar('bbbbbbbb'));
console.log('Longest Substring:',longestSubstrWithoutRepeatingChar('pwwkew'));