const bestSum=(targetSum, nums,memo={})=>{
    if (targetSum in memo) return memo[targetSum]
    if (targetSum===0) return []
    if (targetSum<0) return null
    let res=null
    for (let num of nums){
        const remainder=targetSum-num
        const remainderCombination=bestSum(remainder,nums,memo)
        if (remainderCombination!==null){
            const combination=[...remainderCombination, num]
            if(res===null||combination.length<res.length){
                res=combination
            }
        }
    }
    memo[targetSum]=res
    return res
}

console.log(bestSum(7,[5,3,4,7]))   //[ 7 ]
console.log(bestSum(8,[2,3,5]))     //[ 5, 3 ]
console.log(bestSum(8,[1,4,5]))     //[ 4, 4 ]
console.log(bestSum(100,[1,2,5,25]))//[25,25,25,25]

// m = targetSum    n= array length
// O(n*m^2) time
// O(m^2) space