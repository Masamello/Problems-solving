const argumentsLength = (...args)=>{
    return args.length    
}

console.log(argumentsLength(1,null,[],{}));
console.log(argumentsLength(3));