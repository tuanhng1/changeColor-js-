var btn = document.getElementById("btn");
btn.addEventListener("click",function(){
    document.body.style.backgroundColor = changeColor();

    var h1 = document.getElementById("heading");
    h1.textContent = changeColor();

    
});

function changeColor() {
    let r = Math.floor(Math.random()* 256);
    let g = Math.floor(Math.random()* 256);
    let b  = Math.floor(Math.random()* 256);
    return `rgb(${r},${g},${b})`;
}




