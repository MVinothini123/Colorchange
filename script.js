// basic syntax
const btn = document.querySelector("button");
const body = document.querySelector("body");
body.style.backgroundColor = "aqua"
const color = ["pink","red","black","sky blue","purple","yellow","green","grey","orenge","white","light green",'white'];
document.addEventListener("click",function(){
    const colorIndex = parseInt (Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex];
});
