const filter = (arr,fn) =>{
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i],i)){ //fn関数に現在の要素arr[i]とインデックスiを渡す
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(filter([0,10,20,30],function greaterThan10(n){return n > 10;}))
console.log(filter([1,2,3],(n,i)=>{return i === 0;}))
console.log(filter([-2,-1,0,1,2],(n)=> {return n + 1}))

// function customFilter(array, conditionFunction) {
//     const filteredResult = [];

//     for (let index = 0; index < array.length; index++) {
//         const currentValue = array[index];
//         const shouldKeep = conditionFunction(currentValue, index);

//         console.log(`Index: ${index}, Value: ${currentValue}, Should keep? ${shouldKeep}`);

//         if (shouldKeep) {
//             filteredResult.push(currentValue);
//         }
//     }

//     return filteredResult;
// }

// const result = customFilter([0, 10, 20, 30], function(value, index) {
//     return value > 10;
// });

// console.log("Filtered Result:", result);

