const fiboGenerator = function*(){
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }

}

const gen = fiboGenerator();
for(let i = 0; i < 5; i++){
    console.log(gen.next().value);
}

// function* => generator function,普通の関数と少し違う、yieldを使って処理一時的に停止、valueを返すことができる。
// 初期値に0,1を設定、無限ループでaとbを更新しながら値を返す。返す値は最初のaのみなので、yieldはaだけを選択。