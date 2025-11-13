function findLargest(arr) {

    // return arr.length === 0 ? null : Math.max(...arr);
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}


let arr = [3, 2, 1,5,6,-10];

const res = findLargest(arr);
console.log(res);