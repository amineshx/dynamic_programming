const canSum=(targetsum, nums)=>{
    const table = Array(targetsum+1).fill(false)
    table[0]=true
    for (let i=0; i<=targetsum; i++){
        if (table[i]){
            for (let num of nums){
                table[i+num]=true
            }
        }
    }
    return table[targetsum]
}

console.log(canSum(7,[2,3])) // true
console.log(canSum(7,[5,3,4,7])) // true
console.log(canSum(7,[2,4]))    // false
console.log(canSum(8,[2,3,5]))  // true
console.log(canSum(300,[7,14])) // false

