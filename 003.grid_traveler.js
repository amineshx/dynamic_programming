const gridtravler=(m,n)=>{
    if (m===1 && n===1 ) return 1
    if (m===0 || n===0 ) return 0
    return gridtravler(m-1,n)+ gridtravler(m,n-1)
}

console.log(gridtravler(1,1))
console.log(gridtravler(2,3))
console.log(gridtravler(3,2))
console.log(gridtravler(3,3))
console.log(gridtravler(18,18))

// O(2^(m+n)) time
// O(n+m) space