// Write a function countZeros that takes string and return how many zero that string has
const countZero = (str) =>{
    let counter = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === '0'){
            counter++;
        }
    }
    return counter;
}
console.log('Count Zero:',countZero('1020304050'));

// Write a function countAandB that takes string and returns how many 'a' and 'b' is appeared in the string
const countAandB = (str) =>{
    str = str.toLowerCase();
    let counter = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'b'){
            counter++;
        }
    }
    return counter;
}

console.log('Count A and B:',countAandB('banana'));
console.log('Count A and B:',countAandB('I am Masa'));

// Write a function countAlternatingBits that Take a string consisting of only 0s and 1s and return the longest of the lengths of successively alternating substrings.
const countAlternatingBits = (str) =>{
    let maxLen = 1;
    let currentlen = 1;
    for(let i = 1; i < str.length; i++){
        if(str[i] !== str[i - 1] && (str[i] === '0' || str[i] === '1')){
            currentlen++
            if(currentlen > maxLen){
                maxLen = currentlen;
            }
        }else{
            currentlen = 1
        }
    }
    return maxLen;
}

console.log('Count Alternating Bits:',countAlternatingBits('101010'))
console.log('Count Alternating Bits:',countAlternatingBits('11110000'))

// Write a function countIslandOnes that counts the number of "groups in which 1 appears in succession.
const countIslandOnes = (str) => {
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === '1' && (i === 0 || str[i - 1] === '0')){
            count++;
        }
    }
    return count;
}
console.log('Count Island Ones:',countIslandOnes('110011100111'));
console.log('Count Island Ones:',countIslandOnes('101010101'));
console.log('Count Island Ones:',countIslandOnes('0000'));
console.log('Count Island Ones:',countIslandOnes('11111'));

// Write a function countBalancedSubstrings that takes stings which become only 1 and 0 and returns balanced substrings
const countBalancedSubstrings = (str) =>{
    let counter = 0;
    let zero = 0;
    let one = 0;
    str.split("").forEach(char => {
        if(char == '0'){
            zero++; 
        }else if(char == '1'){
            one++;
        }
        if(zero == one){
            counter++;
            zero = 0;
            one = 0;
        }
    });
    return counter;
}

console.log('Balanced Binary String:',countBalancedSubstrings('01001110'));
console.log('Balanced Binary String:',countBalancedSubstrings('000000'));
console.log('Balanced Binary String:',countBalancedSubstrings('01'));
console.log('Balanced Binary String:',countBalancedSubstrings('110100011'));

// Write a function that takes str which become only 1 and 0 and returns longest alternating sequensce substrings without using array methods.
const longestAlternatingSequence = (str)=>{
    let currentLen = 1;
    let maxLen = 1;
    for(let i = 1; i < str.length; i++){
        if(str[i] !== str[i - 1] && (str[i] === '0' || str[i] === '1')){
            currentLen++;
            if(currentLen > maxLen){
                maxLen = currentLen;
            }
        }else{
            currentLen = 1;
        }
    }
    return maxLen;
}

console.log('Longest Alternating Seqeuce:',longestAlternatingSequence('101010'));
console.log('Longest Alternating Seqeuce:',longestAlternatingSequence('110011'));
console.log('Longest Alternating Seqeuce:',longestAlternatingSequence('000111'));
console.log('Longest Alternating Seqeuce:',longestAlternatingSequence('101'));

const longestParallelSequence = (str) =>{
    let currentLen = 1;
    let maxLen = 1;
    for(let i = 1; i < str.length; i++){
        if(str[i] === str[i - 1] && (str[i] === '1' || str[i] === '0')){
            currentLen++;
            if(currentLen > maxLen){
                maxLen = currentLen;
            }
        }else{
            currentLen = 1;
        }
    }
    return maxLen;
}

console.log('Longest Parallel Sequence:',longestParallelSequence('11000111101010111'));
console.log('Longest Parallel Sequence:',longestParallelSequence('000011000'));
console.log('Longest Parallel Sequence:',longestParallelSequence('10101'));
console.log('Longest Parallel Sequence:',longestParallelSequence('11111'));

// Write a function isSymmetric that takes array and check it if that array are palindromic or not, return only true or false.
const isSymmetric = (arr) =>{
    let start = 0;
    let last = arr.length - 1;
    while(start < last){
        if(arr[start] !== arr[last]) return false;
        start++;
        last--;
    }
    return true;
}

console.log('isSymmetric:',isSymmetric([1,2,3,2,1]));
console.log('isSymmetric:',isSymmetric(["a","b","c","b","a"]));
console.log('isSymmetric:',isSymmetric([1,2,3,4,5]));

// Write a function countClumps that takes array and returns how many clumps will be appeared
const countClumps = (arr) =>{
    let count = 0;
    let i = 0;
    while(i < arr.length){
        if(arr[i] == arr[i+1]){
            count++;
            while(arr[i] == arr[i+1]){
                i++;
            }
        }
        i++;
    }
    return count;
}

console.log('Count Clumps:',countClumps([1,2,2,3,4,4]));
console.log('Count Clumps:',countClumps([1,2,1,1,1]));
console.log('Count Clumps:',countClumps([1,2,3,4,5,3]));

// Write a function that takes arr and returns the element which appear only one time in the arr;
const uniqueOnce = (arr) =>{
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let counter = 0;
        for(let j = 0; j < arr.length; j++){
            if(arr[i] == arr[j]){
                counter++;
            }
        }
        if(counter === 1){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log('unique Once:',uniqueOnce([1,2,2,3,4,4,5]));
console.log('unique Once:',uniqueOnce([7,8,8,9,10,7]));
console.log('unique Once:',uniqueOnce([1,1,1]));

// Write a function that takes an array fo strings and returns an array containing only the strings that have all unique characters
const uniqueChar = (arr) =>{
    let result = [];
    for(let word of arr){
        word = word.toLowerCase();
        const seenChars = new Set();
        let isDuplicate = false;
        for(let i = 0; i < word.length; i++){
            let char = word[i];
            if(seenChars.has(char)){
                isDuplicate = true;
                break;
            }
            seenChars.add(char);
        }
        if(!isDuplicate){
            result.push(word);
        }
    }
    return result;
}

console.log('Unique Character:',uniqueChar(["apple","banana","abc","police"]));

// Write a finction that takes calculates the factorial of a number using a for...of loop and an array generated from 1 to n.
const factorial = (n) =>{
    let result = 1;
    if(n == 0) return result;
    for(let i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}

console.log('Factorial Iterative:',factorial(5));
console.log('Factorial Iterative:',factorial(6));

// Write a function that takes an object whose values are strings, and returns an array of keys sorted by the length of their string values in ascending order. Use a for...in loop.
const objectKeyLengthSortedByValue = (obj) => {
    let arr = [];
    for (let key in obj) {
        arr.push({ key: key, length: obj[key].length });
    }
    arr.sort((a, b) => a.length - b.length);
    return arr.map(item => item.key);
};

console.log('Object Key Lenght Sorted By Value:',objectKeyLengthSortedByValue({a:"hi", b:"hello", c:"hey"}));

// Write a function that takes an array of numbers and returns the mode (the number that appears most frequently). If multiple numbers have the same frequency, return the smallest one.
const findMode = (arr) =>{
    let counts = {};
    let maxCounts = 0;
    let maxNum = 0;
    for(let num of arr){
        if(counts[num] !== undefined){
            counts[num] += 1;
        }else{
            counts[num] = 1;
        }
        if(counts[num] > maxCounts){
            maxCounts = counts[num];
            maxNum = num;
        }
    }
    console.log(counts);
    return maxNum;
}

console.log('Find Monde:',findMode([1,2,2,3,3]));
console.log('Find Monde:',findMode([1,2,3,3]));

// Write a function that takes an array of integers and returns a new array containing only the numbers with an even number of digits.
const evenDigitNums = (arr) =>{
    let result = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            if((String(arr[i]).length) % 2 == 0){
                result.push(arr[i]);
            }
        }
        
    }
    return result;
}

console.log("Even Digit Numbers:",evenDigitNums([12,345,2,6,7896]));

// Write a function that rotates an array to the left by given number n.
const rotateNumToLeft = (arr,n) =>{
    n = n % arr.length;
    if(n === 0) return arr;
    let left = arr.slice(0,n);
    let right= arr.slice(n);
    let result = right.concat(left);
    return result;
}

console.log("Rotate Number to Left:",rotateNumToLeft([1,2,3,4,5],2));
console.log("Rotate Number to Left:",rotateNumToLeft([1,2,3,4,5,6],1));

// Write a function that finds the second largest numner in an array without sorting it
const leastNum = (arr)=>{
  let smallest = arr[0];
  let smallestIdx = 0;
  for(let i=1; i<arr.length;i++){
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIdx = i;
    }
  }
  return smallestIdx
}

const sortArray = (arr)=>{
    const newArr = [];
    while(arr.length) {
        let smallest = leastNum(arr);
        newArr.push(...arr.splice(smallest,1));
    }
    return newArr;
}

const secondLargestNum = (arr) =>{
    let sortedArr = sortArray(arr);
    return sortedArr.splice(-2,1);
}

console.log("Second Largest Num:",secondLargestNum([10,20,4,2,99]));
console.log("Second Largest Num:",secondLargestNum([10,20,4,45,99]));

const secondLargestNumAnotherWay = (arr) =>{
    let largest = -Infinity; // to ensure that any number in the array will be larger thhan current.
    let secondLargest = -Infinity;

    for(let num of arr){
        if(num > largest){
            secondLargest = largest;
            largest = num;
        }else if(num > secondLargest && num < largest){
            secondLargest = num;
        }
    }
    return secondLargest;
}

console.log('Second Largest Num:',secondLargestNumAnotherWay([10, 20, 4, 2, 99]));

// Write a function that takes an array that may contain subarrays and returns a new flattened array
const flattenNestedArr = (arr) =>{
    let flattenedArr = [];
    const checkIfNestedArr = (subArr) =>{
        for(let i = 0; i < subArr.length; i++){
            if(Array.isArray(subArr[i])) { //今見てる要素がArrayだったらcheckIfNestedArrを呼び出して深い階層の処理をさせる
                checkIfNestedArr(subArr[i]);
            } else {
                flattenedArr.push(subArr[i]); //今見てる要素がアレイじゃなかったらプッシュして次
            }
        }
    }
    checkIfNestedArr(arr); //最初に渡したarrを再帰関数に渡して実行
    return flattenedArr;
}

console.log('Flattened Array:',flattenNestedArr([1, [2, [3, 4], 5], 6]));
console.log('Flattened Array:',flattenNestedArr([[1, 2], [3, 4], 5]));
console.log('Flattened Array:',flattenNestedArr([1, null, [2]]));

// Write a function that finds the missing number
const findMissingNum = (arr) =>{
    let missing = 0;
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i + 1] !== arr[i] + 1){
            missing = arr[i] + 1;
            break;
        }
    }
    return missing;
}

console.log('Find Missing Num:',findMissingNum([1,3,4,5]));
console.log('Find Missing Num:',findMissingNum([1,2,3,5]));

// Write a function that takes an array of intergers and returns the element that appears more than n/2 times
const majorityElement = (arr) => {
  const cnt = {};
  let best = 0
  let bestNum = null;
  for (const x of arr) {
    cnt[x] = (cnt[x] || 0) + 1;
    if (cnt[x] > best) { best = cnt[x]; bestNum = x; }
  }
  return best > Math.floor(arr.length / 2) ? bestNum : null;
};

console.log('Majority Element:',majorityElement([2,2,1,2,3,2,2]));
console.log('Majority Element:',majorityElement([3,3,1,2,3,2,3]));
console.log('Majority Element:',majorityElement([3,3,1,2,3,2,2]));

// Write a function that checks if a given number is a palindrome
const isPalindromeNum = (n) =>{
    n = String(n).split("");
    let firstIdx = 0;
    let lastIdx = n.length - 1;
    while(firstIdx < lastIdx){
        if(n[firstIdx] !== n[lastIdx]){
            return false;
        }
        firstIdx++;
        lastIdx--;
    }
    return true;
}

console.log('Palindrome Number:',isPalindromeNum(1221));
console.log('Palindrome Number:',isPalindromeNum(121));
console.log('Palindrome Number:',isPalindromeNum(123));

// Write a function that takes an array and returns rotate array to the right by k(given number) steps
const rotateArray = (arr,k) =>{
    let newArr = new Array(arr.length);
    for(let i = 0; i < arr.length; i++){
        let newIdx = (i + k) % arr.length; //(i+k)で要素をk個分動かしたときの位置を表すが、配列の長さを超えるインデックスは存在しないためアレイの長さで割ったあまりをnewIdxとしてはみ出た分を先頭に戻している
        newArr[newIdx] = arr[i];
    }

    return newArr;
}

console.log('Rotate Array:',rotateArray([1,2,3,4,5],2));
console.log('Rotate Array:',rotateArray([1,2,3,4,5],3));

// Write a function that takes an array of intergers in sequences and returns how many unique elemnts exist in an array
const countUniquElmnt = (arr) =>{
    let obj = {};
    for(let num of arr){
        if(obj[num] == undefined){
            obj[num] = 1;
        }
    }
    let key = Object.keys(obj);
    return key.length;
}

console.log('Count Unique Distinct Element:',countUniquElmnt([1,2,2,3,4,4,5]));