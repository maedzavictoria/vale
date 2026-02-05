const noBtn=
document.getElementById("no");
const card=
document.querySelector(".card");
const yesBtn =
document.getElementById("yes");
function moveButton() {
    const cardRect=
    card.getBoundingClientRect();
    const maxX= cardRect.width- noBtn.offsetWidth;
    const maxY= cardRect.height- noBtn.offsetHeight;
     const x =Math.random()*maxX;
     const y =Math.random()*maxY;
      noBtn.style.left= x +"px";
      noBtn.style.top = y +"px";
}
//works for mouse
noBtn.addEventListener("mouseover", moveButton);
//works for smartphone(touch)
noBtn.addEventListener("touchstart",moveButton);
yesBtn.addEventListener("click",()=>{
    alert ("Yaaaay!!😍💍l love you MESK😘")
});