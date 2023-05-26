const containterEl=document.querySelector(".container");
for (let index = 0; index < 30; index++) {
    newColorCode=randomColor()
    const colorContainerEl=document.createElement('div')
    colorContainerEl.classList.add("color")
    colorContainerEl.style.backgroundColor=newColorCode;
    colorContainerEl.innerText=newColorCode;
    containterEl.appendChild(colorContainerEl)
}

function randomColor(){
    const chars="0123456789abcdef"
    const colorCodeLength=6;
    let colorCode="#";

    for(let index=0; index < colorCodeLength; index++){
        const randomNum=Math.floor(Math.random() * chars.length);
        colorCode+=chars.substring(randomNum,randomNum+1)
      
    }

    return colorCode;
}

randomColor()