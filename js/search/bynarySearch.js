let recursiveFunction = function (arr, x, first, last) {

    if (first > last) return false;

    let mid = Math.floor((first + last) / 2);

    ///mid 
    if (arr[mid] === x) return true;

    //direction of search
    if (arr[mid] > x)
        return recursiveFunction(arr, x, first, mid - 1);
    else
        return recursiveFunction(arr, x, mid + 1, last);
}

// Driver code
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (recursiveFunction(arr, x, 0, arr.length - 1))
    document.write("Element found!<br>");
else document.write("Element not found!<br>");

x = 6;

if (recursiveFunction(arr, x, 0, arr.length - 1))
    document.write("Element found!<br>");
else document.write("Element not found!<br>");