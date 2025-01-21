window.onload = function() {
    var img = document.getElementById("image");
    img.src = "res/MH.png";
    img.style.display = "block";
    document.getElementById("message").innerHTML = "Los geht's!";
    document.getElementById("message").style.color = "#000088";
}

function showHoldImage() {
    var img = document.getElementById("image");
    img.src = "res/MH.png";
    img.style.display = "block";
    document.getElementById("message").innerHTML = "Hase lauf!";
    document.getElementById("message").style.color = "#000088";
}

function getRandomNumber() {
    var randomNumber = Math.random();
    var img = document.getElementById("image");

    if(randomNumber < 0.375){
        img.src = "res/H1.png";
        document.getElementById("message").innerHTML = "1";
    }
    else if(randomNumber < 0.625){
        img.src = "res/H2.png";
        document.getElementById("message").innerHTML = "2";
    }
    else if(randomNumber < 0.75){
        img.src = "res/H3.png";
        document.getElementById("message").innerHTML = "3";
    } 
    else {
        img.src = "res/KA.png";
        document.getElementById("message").innerHTML = "Klick!";
    }
     document.getElementById("message").style.color = "#000088";
}