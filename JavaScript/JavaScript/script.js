function counter(){
    let count = 0;
    function countUp(){
        count++;
        return count
    }
    return countUp;
}
const myCounter = counter();
for(let i = 0; i < 10; i++){
    console.log(myCounter());
}