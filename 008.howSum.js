const howSum=(targetSum,nums,memo={})=>{
    if (targetSum in memo) return memo[targetSum]
    if (targetSum===0) return []
    if (targetSum<0) return null

    for (let num of nums){
        const remainder = targetSum-num
        const remainderRes = howSum(remainder,nums,memo)
        if (remainderRes!==null){
            memo[targetSum] = [...remainderRes, num]
            return memo[targetSum]
        }
    }
    memo[targetSum]=null
    return null
}

console.log(howSum(7,[2,3]))    //[ 3, 2, 2 ]
console.log(howSum(7,[5,3,4,7])) //[ 4, 3 ]
console.log(howSum(7,[2,4]))    //null
console.log(howSum(8,[2,3,5]))  //[ 2, 2, 2, 2 ]
console.log(howSum(300,[7,14])) //null

// m = targetSum    n= array length
// O(n*m^2) time
// O(m^2) space