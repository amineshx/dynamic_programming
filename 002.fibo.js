// memoization
//  js object , keys will be arg to fn , value will be return value


const fibo=(n, memo={})=>{
    if(n in memo) return memo[n]
    if(n<=2) return 1
    memo[n]=fibo(n-1,memo) + fibo(n-2,memo)
    return memo[n]
}

console.log(fibo(8))    // 21
console.log(fibo(9))    // 34
console.log(fibo(7))    // 13
console.log(fibo(50))   // 12586269025

// time complexity = O(n)
// space complexity = O(n)