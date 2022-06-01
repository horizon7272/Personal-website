var n = new Date();
var y = n.getFullYear();
var m = n.getMonth() + 1;
var d = n.getDate();

function setDate(){
    document.getElementById("datetext").innerHTML = d + "." + m + "." + y; 
}

document.addEventListener("DOMContentLoaded", function() {
    setDate();
});
