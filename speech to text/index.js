document.querySelector(".recorder").addEventListener("click",function(){
    document.querySelector(".recorder").innerHTML="<i class='fa-solid fa-microphone fa-beat' style='color: #ffffff;' font-size:20px'></i>"
    document.querySelector(".recorder").style.backgroundColor="green"; 
});
document.querySelector(".stop").addEventListener("click",function(){
    document.querySelector(".recorder").innerHTML="<i class='fa-solid fa-microphone' style='color: #ffffff;' font-size:20px'></i>"
    document.querySelector(".recorder").style.backgroundColor="red";
});

function copyToClipboard() {
    const textElement = document.querySelector("#text");
    const text = textElement.innerText;
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    textElement.innerHTML="";
    alert("Text copied to clipboard!");
  }

let resultElement=document.getElementById("text");
let recognition;

function startConverting(){
    if('webkitSpeechRecognition' in window){
        recognition = new webkitSpeechRecognition();
        setupRecognition(recognition);
        recognition.start();
    }
}
function setupRecognition(recognition){
    recognition.continuous=true;
    recognition.interimResults=true;
    recognition.lang='en-US';
    recognition.onresult = function(event){
        const {finalTranscript,interTranscript}=processResult(event.results);
        resultElement.innerHTML=finalTranscript+interTranscript;
    }
}
function processResult(results){
    let finalTranscript='';
    let interTranscript='';
    for(let i=0;i<results.length;i++){
        console.log(results[i][0]);
        let transcript=results[i][0].transcript;
        if(results[i].isFinal){
            finalTranscript+=transcript;
        }
        else{
            interTranscript+=transcript;
        }
    }
    return {finalTranscript,interTranscript}
}
function stopConverting(){
    if(recognition){
        recognition.stop();
    }
}