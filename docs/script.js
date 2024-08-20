let off = 0

const Rotate = (e) =>{
    const x_center = window.innerWidth/2;
    const y_center = window.innerHeight/2;

    let  xmotion = e.clientX;
    let ymotion = e.clientY;

    let x = xmotion-x_center
    let y = ymotion-y_center
    //We start with X
    document.getElementsByTagName("section")[0].style.transform = `rotateX(${180*(y/y_center)}deg) rotateY(${180*(x/x_center)}deg)`
}

document.addEventListener("dblclick", ()=>{
    if(off){
        document.removeEventListener("mousemove", Rotate)
        off = 0
    }else{
        document.addEventListener("mousemove", Rotate)
        off = 1
    }
})

