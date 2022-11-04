function Output(n) {
    document.querySelector('.output').innerHTML += `<div>${n}</div>`.replace(/,/g, ' ')
}
function OutputSteps(n) {
    document.querySelector('.output').innerHTML += `<div style="color: #8e8e8e;">${n}</div>`.replace(/,/g, ' ')
    console.log(n);
}