



function rotateByNum() {
    let x = document.querySelector('#x');
    let q = document.querySelector('div');

    let value = x.value;
        q.style.transform = `rotate(${value}deg)`
}