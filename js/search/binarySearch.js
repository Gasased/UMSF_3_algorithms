let binarySearch = function (arr, x) {

    first = 0
    last = arr.length - 1

    if (first > last) return false;

    let mid = Math.floor((first + last) / 2);

    ///mid 
    if (arr[mid] === x) return true;

    //direction of search
    if (arr[mid] > x)
        return binarySearch(arr, x, first, mid - 1);
    else
        return binarySearch(arr, x, mid + 1, last);
}

// let arr = [1, 3, 5, 7, 8, 9];
// let x = 5;

// console.log(binarySearch(arr, x,));

// if (binarySearch(arr, x,))
// alert('found!')
// else alert('not found :c')

// x = 6;

// if (recursiveFunction(arr, x, 0, arr.length - 1))
// alert('found!')
// else alert('not found :c')