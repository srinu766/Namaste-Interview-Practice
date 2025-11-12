function findSmallest(arr) {
  // if (!Array.isArray(arr)) return false;
  // if (arr.length === 0) return null;
  // let smallest;
  // for (let i = 0; i < arr.length; i++){
  //   const value = arr[i];
  //   if (typeof value !== "number" || !Number.isFinite(value)) return false
  //   if (smallest === undefined || value < smallest) {
  //     smallest = value;
  //   }
  // }
  // return smallest


  return arr.length === 0 ? null : Math.min(...arr);
}

let arr = [3, 2, 1];

const res = findSmallest(arr);
console.log(res);
