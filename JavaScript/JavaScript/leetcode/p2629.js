const compose = (functions) =>{
    return function(x){
        let result = x;
        if(functions.length === 0) return x;
        for(let i = functions.length - 1; i >= 0; i--){
            result = functions[i](result);
        }
        return result        
    }
}

const f1 = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(f1(4));

const f2 = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
console.log(f2(1));

const f3 = compose([]);
console.log(f3(42));