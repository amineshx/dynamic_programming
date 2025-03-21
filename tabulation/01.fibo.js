const fibo = (n)=>{
    const table = Array(n+1).fill(0)
    table[1]=1
    for (let i=1 ; i<=n; i++){
        table[i+1]+=table[i]
        table[i+2]+=table[i]
    }
    return table[n]
}

console.log(fibo(7))    // 13
console.log(fibo(8))    // 21
console.log(fibo(9))    // 34
console.log(fibo(50))   // 12586269025
