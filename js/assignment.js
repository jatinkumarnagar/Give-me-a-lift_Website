let imgslider=document.querySelector("#slider")

let n = 0;

function next()
{
    n++
    if(n > 7){
        n=5;
    }
    imgslider.src= `images/post${n}.jpg`
}