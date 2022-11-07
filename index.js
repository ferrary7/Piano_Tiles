// Bringing sounds from the assets folder

const audioOne = new Audio("./assets/do.mp3");
const audioTwo = new Audio("./assets/re.mp3");
const audioThree = new Audio("./assets/mi.mp3");
const audioFour = new Audio("./assets/fa.mp3");
const audioFive = new Audio("./assets/si.mp3");


// Adding sounds and functions to the piano keys

document.getElementById('one').onclick=()=>{
    audioOne.play();
}
document.getElementById('two').onclick=()=>{
    audioTwo.play();
    window.open('https://github.com/ferrary7', '_blank')
}
document.getElementById('three').onclick=()=>{
    audioThree.play();
}
document.getElementById('four').onclick=()=>{
    audioFour.play();
}
document.getElementById('five').onclick=()=>{
    var username = document.getElementById("userName").value
    var nickname = document.getElementById("nickName").value
            if(username == ""){
                window.open('index.html','_self')
                alert("Type in your name, please😅!");
            }
            else{
                window.open('game.html','_self')
            }
            if(nickname == ""){
                window.open('index.html','_self')
                alert("Type in your nick name, please😅!");
            }
            else{
                window.open('game.html','_self')
            } 
}
document.getElementById('six').onclick=()=>{
    audioFive.play();
    window.open('https://www.linkedin.com/in/ferrary7', '_blank')
}
document.getElementById('seven').onclick=()=>{
    audioOne.play();
}
document.getElementById('eight').onclick=()=>{
    audioTwo.play();
}
document.getElementById('nine').onclick=()=>{
    audioThree.play();
}
document.getElementById('ten').onclick=()=>{
    audioOne.play();
    window.open('instructions.html', '_blank')
}
document.getElementById('eleven').onclick=()=>{
    audioFour.play();
}
document.getElementById('twelve').onclick=()=>{
    audioFive.play();
}
