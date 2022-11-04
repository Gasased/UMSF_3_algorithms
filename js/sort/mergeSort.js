function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
            // Output(arr);
        } else {
            arr.push(right.shift()) 
            // Output(arr);
        }
    }
    OutputSteps(arr, left, right)    
    return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
    const half = array.length / 2
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    OutputSteps(left + ' ' + array);
    return merge(mergeSort(left),mergeSort(array))
  }
 
// Output(mergeSort([5, 789, 24]))
