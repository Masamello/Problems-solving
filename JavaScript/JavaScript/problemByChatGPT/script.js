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