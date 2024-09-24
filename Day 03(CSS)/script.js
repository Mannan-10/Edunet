function getRandomColor(){
    let v1 = Math.ceil(Math.random() *255);
    let v2 = Math.ceil(Math.random() *255);
    let v3 = Math.ceil(Math.random() *255);

    return `rgb(${v1}, ${v2}, ${v3})`;
}

let boxes = document.querySelectorAll('container').children;

let a = setTimeout(() => { 
    Array.from(boxes).forEach(e=>{
        e.backgroundColor = getRandomColor();
    });
}, 2000);

console.log(a)