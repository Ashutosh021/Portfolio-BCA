function f1() {

    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn1").style.color = "#ff004f";
    
    document.getElementById("skill").style.display = "block";
    document.getElementById("experience").style.display = "none";
    document.getElementById("education").style.display = "none";
}
function f2() {
    
    document.getElementById("btn1").style.backgroundColor = "#ff004f";
    document.getElementById("btn1").style.color = "white";

    document.getElementById("experience").style.display = "block";
    document.getElementById("skill").style.display = "none";
    document.getElementById("education").style.display = "none";
}
function f3() {
    
    document.getElementById("btn1").style.backgroundColor = "#ff004f";
    document.getElementById("btn1").style.color = "white";

    document.getElementById("education").style.display = "block";
    document.getElementById("skill").style.display = "none";
    document.getElementById("experience").style.display = "none";
}


var sidemenu=document.getElementById("tab");

function openmenu(){
    sidemenu.style.right="0";
}

function closemenu(){
    sidemenu.style.right="-200px";
}

function closeit(){
    document.getElementById("tab").style="none";

}
