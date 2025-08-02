close=document.getElementsByClassName("wrong")[0];
image=document.getElementsByTagName("img")[0];
document.getElementById("file").addEventListener("change", (event) => {
    image.classList.add("image");
    image.style.display="block";
    close.classList.add("wrong");
    close.style.display="block";
    if(event.target.files && event.target.files[0]){
        image.src=URL.createObjectURL(event.target.files[0]);
        close.addEventListener("click",()=>{
            image.style.display="none";
            close.style.display="none";
        })
    }
  
});