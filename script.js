// links //
const link1  = "http://172.236.127.104:81/";
const link2 = "http://172.236.127.104:82/";
const link3 = "http://172.236.127.104:83/";

// passes //
const pass1 = "stoplooking";
const pass2 = "atmycodebro";
// buttons //
const button1 = document.getElementById("button1");
const button2 = document.querySelector("button2");
const button3 = document.getElementById("button3");

// input boxes //
const submit2 = document.getElementById("submit2");
const submit3 = document.getElementById("submit3");

function publicJoin(){
    window.open(link1);
}

function privateJoin2(){
    let currentPass = document.getElementById("submit2").value;
    if(currentPass == "studygroupela"){
        window.open(link2);
    }       
}

function privateJoin3(){
    let currentPass2 = document.getElementById("submit3").value;
    if(currentPass2 == "tripp1013"){
        window.open(link3);
    }
}
