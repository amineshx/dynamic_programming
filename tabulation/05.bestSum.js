const bestSum = (targetSum,nums)=>{
    const n = targetSum+1
    const table = Array(n+1).fill(null)
    table[0]=[]
    for (let i=0; i<n; i++){
        if (table[i]!==null){
            for (let num of nums){
                if(!table[i+num]||table[i].length<table[i+num].length){
                    table[i+num]=[...table[i],num]
                }
            }
        }
    }
    return table[targetSum]
}
console.log(bestSum(7,[5,3,4,7]))   //[ 7 ]
console.log(bestSum(8,[2,3,5]))     //[ 5, 3 ]
console.log(bestSum(8,[1,4,5]))     //[ 4, 4 ]
console.log(bestSum(100,[1,2,5,25]))//[25,25,25,25]
console.log(bestSum(100,[25,2,5,1]))//[25,25,25,25]