let btn = document.querySelector(".btn")

const randomColor = () => {
    let val = "0123456789ABCDEF";
    let bgColor = "#";
    for (let i = 0; i < 6; i++) {
        bgColor = bgColor + val[Math.floor(Math.random() * 16)];
    }
    return bgColor
};
const changeRandomColor=()=>{
document.body.style.backgroundColor=randomColor()
}
// changeRandomColor();
btn.addEventListener("click",changeRandomColor)