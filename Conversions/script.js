function temperature(){
    //To convert celsius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f
 }

function weight() {
    //To convert kilos to pounds (lbs)
    //KG * 2.2
    var kg = document.getElementById("kilo").value;
    var lbs = kg * 2.2
    document.getElementById("pounds").value = lbs
 }

function distance() {
    //To convert kilometers to miles
    //KM * 0.62137
    var km = document.getElementById("km").value;
    var mi = km * 0.62137
    document.getElementById("miles").value = mi
}