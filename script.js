var cookieMessage = document.querySelector(".cookieMsg");
var highTemp = document.querySelectorAll(".high");
var lowTemp = document.querySelectorAll(".low");

var cHighTemps = ["24°", "27°", "21°", "26°"];
var fHighTemps = ["75°", "80°", "69°", "78°"];
var cLowTemps = ["18°", "19°", "16°", "21°"];
var fLowTemps = ["65°", "66°", "61°", "70°"];
// (0°C × 9/5) + 32

function sendAlert() {
    alert("Loading weather report...")
}

function dismiss() {
    cookieMessage.remove();
}

function changeTemp(element){
    console.log(highTemp);
    for(var i = 0; i < highTemp.length; i++){
        if(element.value == "°F") {
            console.log("Farenheit");
            highTemp[i].innerText = fHighTemps[i];
            lowTemp[i].innerText = fLowTemps[i];
        }
        else{
            console.log("Celsius");
            highTemp[i].innerText = cHighTemps[i];
            lowTemp[i].innerText = cLowTemps[i];
        }
    }
}