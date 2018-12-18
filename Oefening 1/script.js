/*
////////////////////////////////////////////////////////////////////////////////////
//MOUSE EVENTS
//Oefening 1
var hoverMe = document.getElementsByClassName('hoverMe');
console.log(hoverMe);

let onMouseOver = function (event) {
    this.style.visibility = 'hidden';
}

for (variable of hoverMe) {
    variable.addEventListener('mouseover', onMouseOver)
}
//Oefening 2
let reset = document.getElementById('reset');
let onClick = function (event) {
    for (variable of hoverMe) {
        variable.style.visibility = 'visible';
    }
}
reset.addEventListener('click', onClick);

//Oefening 3
let divX = document.getElementById('xCoordinate');
let divY = document.getElementById('yCoordinate');

function getXCord(event) {
    let x = event.clientX;
    let p = document.createElement('p');
    let text = document.createTextNode("x-cord: "+x);
    p.appendChild(text);
    divX.appendChild(p);
}

function getYCord(event) {
    let y = event.clientY;
    let p = document.createElement('p');
    let text = document.createTextNode("y-cord: "+y);
    p.appendChild(text);
    divY.appendChild(p);
}

divX.addEventListener('mouseover', getXCord);
divY.addEventListener('mouseover', getYCord);
*/
////////////////////////////////////////////////////////////////////////////////////

//Keyboard events
//Oefening 01

let color = document.getElementById("character");

//functie spreekt altijd het event aan
function changeColor(event) {

    //switch als event.key gelijk is aan case value voer dan changeColor uit
    //event.keycode, spreek een key aan met een integer value voor een key
    switch (event.key) {
        case "0":
            color.style.backgroundColor = "red";
            break;
        case "1":
            color.style.backgroundColor = "blue";
            break;
        case "2":
            color.style.backgroundColor = "green";
            break;
        case "3":
            color.style.backgroundColor = "yellow";
            break;
        case "4":
            color.style.backgroundColor = "LightSeaGreen ";
            break;
        case "5":
            color.style.backgroundColor = "MediumAquaMarine ";
            break;
        case "6":
            color.style.backgroundColor = "aquamarine";
            break;
        case "7":
            color.style.backgroundColor = "DarkOrange ";
            break;
        case "8":
            color.style.backgroundColor = "DodgerBlue ";
            break;
        case "9":
            color.style.backgroundColor = "IndianRed ";
            break;
        default:
        //press any key to go to default
        color.style.backgroundColor = "white";
    }
}
//binnen het 'window' van de website als er een key ingedrukt wordt voer changeColor uit
//keypress: enkel voor toetsen met 1 karakter
window.addEventListener("keydown", changeColor);

//Keyboard events
//Oefening 02

