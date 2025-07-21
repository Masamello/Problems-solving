const fiboGenerator = function*(){
    yield 0;
    yield 1;
}
const gen = fiboGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// let result = [];
//     let num = n;
//     let sum = 0;
//     for(let i = 0; i < num; i++){
        
//     }