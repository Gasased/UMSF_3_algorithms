let input = document.querySelector('input');



document.querySelector('.sort').addEventListener('click', ()=>{
    Output(mergeSort(input.value.split(' ').map(function (x) {
        return parseInt(x, 10);
    })));
    // console.log(input.value.split(' '));
})