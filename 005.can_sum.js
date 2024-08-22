const canSum=(targetsum, nums)=>{
    if(targetsum===0) return true
    if(targetsum<0) return false
    for(let num of nums){
        const remainder = targetsum-num
        if (canSum(remainder,nums)===true) return true
    }
    return false
}

console.log(canSum(7,[2,3])) // true
console.log(canSum(7,[5,3,4,7])) // true
console.log(canSum(7,[2,4]))    // false
console.log(canSum(8,[2,3,5]))  // true
console.log(canSum(300,[7,14])) // false