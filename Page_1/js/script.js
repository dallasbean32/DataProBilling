// fill1 rule to auto-populate facility address / npi / tax id boxes based on select-option selected
function fill1() {
    var name = document.getElementById("facility");
    output = name.value;

    if (output == "blank") {
        document.getElementById("facAddress").textContent = "";
        document.getElementById("npi").textContent = "";
        document.getElementById("taxID").textContent = "";
}
    if (output == "manual") {
        document.getElementById("facAddress").textContent = "";
        document.getElementById("npi").textContent = "";
        document.getElementById("taxID").textContent = "";
        document.getElementById("manBox").classList.toggle("hide");
        document.getElementById("facility").classList.toggle("hide");
        document.getElementById("facNameLabel").classList.toggle("hide");
        document.getElementById("row-1").classList.toggle("row-1-a");
        document.getElementById("row-1").style.maxHeight = "120px"
}
    if (output == "1") {
        document.getElementById("facAddress").textContent = "6758 Wildlife Road Malibu, CA 90265";
        document.getElementById("npi").textContent = "1669130936";
        document.getElementById("taxID").textContent = "87-1369431";
}
    if (output == "2") {
        document.getElementById("facAddress").textContent = "2751 Buford Hwy NE, #204 Atlanta, GA, 30324";
        document.getElementById("npi").textContent = "1033894274";
        document.getElementById("taxID").textContent = "93-1811270";
}
    if (output == "3") {
        document.getElementById("facAddress").textContent = "29913 Burbank Blvd. Woodland Hills CA 91367";
        document.getElementById("npi").textContent = "1932656170";
        document.getElementById("taxID").textContent = "81-2343037";
}
    if (output == "4") {
        document.getElementById("facAddress").textContent = "35450 Pegasus Ct Palm Desert, CA 92211";
        document.getElementById("npi").textContent = "1033580113";
        document.getElementById("taxID").textContent = "474293489";
}
    if (output == "5") {
        document.getElementById("facAddress").textContent = "2625 Townsgate Rdd #210 West lake Village CA 91361";
        document.getElementById("npi").textContent = "1801436019";
        document.getElementById("taxID").textContent = "843962527";
}
    if (output == "6") {
        document.getElementById("facAddress").textContent = "23041 Hatteras St. Woodland Hills, CA 91367";
        document.getElementById("npi").textContent = "1386041580";
        document.getElementById("taxID").textContent = "383941572";
}
    if (output == "7") {
        document.getElementById("facAddress").textContent = "4551 Glencoe Ave. Marina Del Rey, CA 90292";
        document.getElementById("npi").textContent = "1306265954";
        document.getElementById("taxID").textContent = "46-5350178";
        document.getElementById("bOne").classList.toggle("hide");
        document.getElementById("bTwo").classList.toggle("hide");
}
    if (output == "8") {
        document.getElementById("facAddress").textContent = "6565 Tomiyasu Lane Las Vehas, NV 89120";
        document.getElementById("npi").textContent = "1740871243";
        document.getElementById("taxID").textContent = "86-1313018";
}
    if (output == "9") {
        document.getElementById("facAddress").textContent = "SB - 403E. Montecito St #A, SB, CA 93101 /// LA - 12114 Venice Blvd, LA, CA 90066";
        document.getElementById("npi").textContent = "SB-1063893428 /// LA-1558936419";
        document.getElementById("taxID").textContent = "47-3567567";
}
    if (output == "10") {
        document.getElementById("facAddress").textContent = "1809 Windriver St San Marcos, CA 92078";
        document.getElementById("npi").textContent = "1285013672";
        document.getElementById("taxID").textContent = "47-2358426";
}
    if (output == "11") {
        document.getElementById("facAddress").textContent = "1663 Sawtelle Blvd, Ste 240, Los Angeles, CA 90025";
        document.getElementById("npi").textContent = "1669976874";
        document.getElementById("taxID").textContent = "824673065";
        document.getElementById("popup").classList.toggle("hide");
        window.open("./img/Pulse-TMS_excel-Sheet.xlsx");
}
    if (output == "12") {
        document.getElementById("facAddress").textContent = "10522 De Soto Ave. Chatsworth, CA 91311";
        document.getElementById("npi").textContent = "1689141814";
        document.getElementById("taxID").textContent = "824542845";
        document.getElementById("bOne").classList.toggle("hide");
        document.getElementById("bFour").classList.toggle("hide");
}
    if (output == "13") {
        document.getElementById("facAddress").textContent = "10499 Sky Mtn Trl Poway, CA 92064";
        document.getElementById("npi").textContent = "1669918165";
        document.getElementById("taxID").textContent = "475169735";
}
    if (output == "14") {
        document.getElementById("facAddress").textContent = "360 N.Vista St LA, CA 90036";
        document.getElementById("npi").textContent = "1639561566";
        document.getElementById("taxID").textContent = "471837714";
        document.getElementById("bOne").classList.toggle("hide");
        document.getElementById("bThree").classList.toggle("hide");
}
    if (output == "15") {
        document.getElementById("facAddress").textContent = "22900 Ventura Blvd Suite 340 Woodland Hills CA 91364";
        document.getElementById("npi").textContent = "1417328618";
        document.getElementById("taxID").textContent = "47-5188505";
}
}

// if user selects manual row-1 is reformatted. swap is the cancel function to restore the select list and format
function swap() {
    document.getElementById("manBox").classList.toggle("hide");
    document.getElementById("facility").classList.toggle("hide");
    document.getElementById("facNameLabel").classList.toggle("hide");
    document.getElementById("row-1").classList.toggle("row-1-a");
    }

function reveal() {
    document.getElementById("outOfNetworkQ").classList.toggle("hide");
}

function revert1() {
    document.getElementById("bOne").classList.toggle("hide");
    document.getElementById("bTwo").classList.toggle("hide");
}

function revert2() {
    document.getElementById("bOne").classList.toggle("hide");
    document.getElementById("bThree").classList.toggle("hide");
}

function revert3() {
    document.getElementById("bOne").classList.toggle("hide");
    document.getElementById("bFour").classList.toggle("hide");
}

function closebtn() {
    document.getElementById("popup").classList.toggle("hide");
}
