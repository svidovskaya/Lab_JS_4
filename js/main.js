function info(){
console.log("Значение 1: " + document.getElementById("txt").value + '\n' + "Значение 2: " + document.getElementById("txt2").value + '\n' + "Значение 3: " + document.getElementById("txt3").value)
}
document.getElementById("btn").onclick = info;
