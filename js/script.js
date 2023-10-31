function openNav() {
    document.getElementById("sideNav").style.visibility = "visible";
    var two = document.getElementById('menuButton');
    var three = document.getElementById('sideNav');

    two.classList.toggle("hide");
    three.classList.toggle("cssScriptOne");
}

function closeNav() {
    document.getElementById("sideNav").style.visibility = "hidden";
    var two = document.getElementById('menuButton');
    var three = document.getElementById('sideNav');
    
    two.classList.toggle("hide");
    three.classList.toggle("cssScriptOne");
}

// VOB Forms Launch and Close logic

function display() {
    document.getElementById("VOBForms").style.visibility = "visible";
    document.getElementById("VOBForms").classList.toggle("cssScriptOne");
}

function fadeout() {
    document.getElementById("VOBForms").style.visibility = "hidden"; 
    document.getElementById("VOBForms").classList.toggle("cssScriptOne");
}

// Spreadsheets Launch and Close logic

function display1() {
    document.getElementById("spreadsheets").style.visibility = "visible";
    document.getElementById("spreadsheets").classList.toggle("cssScriptOne");
}

function fadeout1() {
    document.getElementById("spreadsheets").style.visibility = "hidden"; 
    document.getElementById("spreadsheets").classList.toggle("cssScriptOne");
}

// UR Forms Launch and Close logic

function display2() {
    document.getElementById("URForms").style.visibility = "visible";
    document.getElementById("URForms").classList.toggle("cssScriptOne");
}

function fadeout2() {
    document.getElementById("URForms").style.visibility = "hidden"; 
    document.getElementById("URForms").classList.toggle("cssScriptOne");
}