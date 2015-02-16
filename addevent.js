function changeColor(){
 		document.getElementById("colorBox").style.background = this.value;
}

var elementEvent = document.getElementById("box")
elementEvent.addEventListener("input", changeColor, false);

