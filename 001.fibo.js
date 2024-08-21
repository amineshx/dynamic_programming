const fibo=(n)=>{
    if(n<=2) return 1
    return fibo(n-1) + fibo(n-2)
}

console.log(fibo(8))    // 21
console.log(fibo(9))    // 34
console.log(fibo(7))    // 13
console.log(fibo(50))   // 12586269025