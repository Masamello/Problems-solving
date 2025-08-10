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