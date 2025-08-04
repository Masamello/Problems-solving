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
            maxLength = currentLength;
            longestSubstring = string.substring(start,end + 1).length;
        }
    }
    return longestSubstring;
}

console.log('Longest Substring:',longestSubstrWithoutRepeatingChar('abcbfeghijka'));
console.log('Longest Substring:',longestSubstrWithoutRepeatingChar('abcabcbb'));
console.log('Longest Substring:',longestSubstrWithoutRepeatingChar('bbbbbbbb'));
console.log('Longest Substring:',longestSubstrWithoutRepeatingChar('pwwkew'));

const multiplyingNumsAltogether = (nums) =>{
    let current = 1;
    for(let num of nums){
        current *= num;
    }
    return current
}

console.log("Product number:",multiplyingNumsAltogether([1,2,3,4]))

const compareNums = (a,b) =>{
    return a - b;
}

const sortByValue = (obj) =>{
    let arr = [];
    for(let key in obj){
        arr.push(obj[key])
    }
    return arr.sort(compareNums)
}

console.log('Sorted values:',sortByValue({a:3,b:1,c:2}))

const findMedian = (arr) =>{
    arr.sort((a,b)=>{ return a-b;});
    const len = arr.length;
    if(len % 2 === 1){
        const middleIdx = (len -1)/2;
        return arr[middleIdx]; //奇数の時は計算の必要がないのでidxで真ん中から取ってくるだけ。
    }else{
        const middle1 = arr[len / 2-1];
        const middle2 = arr[len / 2];
        return (middle1 + middle2) / 2; //偶数の時は真ん中二つの数を足して２で割る必要がある。mid1,mid2をidxから指定した後、それを足して２で割ったものを中央値とする。
    }
}

console.log('The Median:',findMedian([1,2,3,4,5]));
console.log('The Median:',findMedian([1,2,3,4,5,6]));

const isPrime = (num) =>{
    if(num <= 1) return false;
    for(let i = 2; i < num; i++){
        if(num % i === 0) return false
    }
    return true
}

const primeArr = (arr) =>{
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(isPrime(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log('Prime number:',primeArr([10,11,12,13,14,15,17]))

const rotateArray = (arr,n) =>{
    n %= arr.length; //例えばarrが[1,2,3],n=5とすると実質回してる回数は２回分だけなので割って余った回数分だけをnに割り当てる
    if(n === 0) return arr;
    let slicedArr = arr.slice(-n);
    let anotherSlicedArr = arr.slice(0, arr.length - n);
    let concatArr = slicedArr.concat(anotherSlicedArr)
    return concatArr;
}

const anotherRotateArray = (nums,k) =>{
    while (k>=nums.length) {
       k = k-nums.length; 
    }
    const result = [];
    let i = nums.length - k;
    let j = 0;
    while (i<nums.length && j<k) {
        result[j] = nums[i];
        j++;
        i++;
    }
    let l = 0;
    while (l<nums.length-k) {
        result[j] = nums[l];
        l++;
        j++;
    }
    for (let m = 0; m<nums.length; m++) {
        nums[m] = result[m];
    }
    return result
}
console.log('Roatate Array(Another way):',anotherRotateArray([1,2,3,4],3))
console.log("Rotate Array:",rotateArray([1,2,3,4],3));

const longestPalindrome = (string) =>{
    if(string.length <= 1) return string;
    
    let start = 0;
    let end = 0;

    for(let i = 0; i < string.length; i++){
        const len1 = expandFromCenter(string,i,i);
        const len2 = expandFromCenter(string,i,i + 1);
        const maxLen = Math.max(len1,len2);

        if(maxLen > end - start){
            start = i - Math.floor((maxLen - 1)/2);
            end = i + Math.floor(maxLen/2);
        }
    }
    return string.slice(start,end + 1);
}


const expandFromCenter = (str, left, right) =>{
    while(left >= 0 && right < str.length && str[left] === str[right]){
        left--;
        right++;
    }
    return right - left -1;
}
console.log('Longest Palindrome:',longestPalindrome('babad'));
console.log('Longest Palindrome:',longestPalindrome('wbba'));
console.log('Longest Palindrome:',longestPalindrome('a'));
