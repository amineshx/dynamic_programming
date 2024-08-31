const gridtravler=(m,n, memo={})=>{
    const key= m+','+n
    if (key in memo ) return memo[key]
    if (m===1 && n===1 ) return 1
    if (m===0 || n===0 ) return 0
    memo[key]=gridtravler(m-1,n,memo)+ gridtravler(m,n-1,memo)
    return memo[key]
}

console.log(gridtravler(1,1))   //1
console.log(gridtravler(2,3))   //3
console.log(gridtravler(3,2))   //3
console.log(gridtravler(3,3))   //6
console.log(gridtravler(18,18)) //2333606220

// O(m*n) time
// O(n+m) space