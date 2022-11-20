let input = document.querySelector('input');



document.querySelector('.sort').addEventListener('click', () => {
    Output(mergeSort(input.value.split(' ').map(function (x) {
        return parseInt(x, 10);
    })));
    // console.log(input.value.split(' '));
})

document.querySelector('.search').addEventListener('click', () => {

    el = parseInt(prompt("enter the element to search"))

    console.log(input.value.split(' ').map(function (x) {
        return parseInt(x, 10)}))

    console.log(el);

    if (binarySearch([1, 3, 5, 7, 8, 9], el)) {
        alert('found!');
    }
    else{
        console.log('not found :c');
    }

    // if (binarySearch
    //         (input.value.split(' ').map(function (x) {
    //             return parseInt(x, 10)
    //         }),
    //         el))
    //     console.log('found');
    // else
    //     console.log('n found');

    // if (binarySearch(input.value.split(' ').map(function (x) {
    //     return parseInt(x, 10);
    // },
    //     el))) {
    //     console.log('qq');
    // }


}) 