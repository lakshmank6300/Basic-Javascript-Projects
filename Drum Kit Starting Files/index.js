function MakeSound(sel){
    let audio;
        switch(sel){
            case 'w':
                audio=new Audio("./sounds/tom-1.mp3");
                break;
            case 'a':
                audio=new Audio("./sounds/tom-2.mp3");
                break;
            case 's':
                audio=new Audio("./sounds/tom-3.mp3");
                break;
            case 'd':
                audio=new Audio("./sounds/tom-4.mp3");
                break;
            case 'j':
                audio=new Audio("./sounds/snare.mp3");
                break;
            case 'k':
                audio=new Audio("./sounds/crash.mp3");
                break;
            case 'l':
                audio=new Audio("./sounds/kick-bass.mp3");
                break;
            default:
                alert("musukuni dhobbey")
        }
        audio.play();
}

function addAnimation(sel){
    document.getElementsByClassName(sel)[0].classList.add("pressed");
    setTimeout(() => {
        document.getElementsByClassName(sel)[0].classList.remove("pressed");
    }, 100);
}

let element=document.querySelectorAll("button");
let n=element.length;
let sel='';
for(let i=0;i<n;i++){
    element[i].addEventListener("keypress",(event)=>{
        sel=event.key;
        MakeSound(sel);
        addAnimation(sel);
    });
    element[i].addEventListener("click",()=>{
        sel=element[i].innerHTML;
        MakeSound(sel);
        addAnimation(sel);
    });
}