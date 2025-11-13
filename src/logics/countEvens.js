function countEvens(arr){
    let evenSum = 0
    let evenCount = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 == 0){
            // evenSum += arr[i]
            evenCount++
        }
    }
    return evenCount
}

// let arr =  [1,2,3,4]
// let arr =  [-2, -5, -8]
// let arr = [0,2,3]
let arr = []


const res = countEvens(arr)
console.log(res)