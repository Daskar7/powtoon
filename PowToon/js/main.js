var main1;
var greenBox = document.getElementById("main2");
var greenBox2;
main1 = document.getElementById("main1");
console.log('1');
console.log('2');
main1.style.fontSize = "40px";

main1.onmouseover = function () {
    if (main1.style.fontSize == "50px"){
        main1.style.fontSize = "40px";
    }
    else {
        main1.style.fontSize = "50px";
    }

}
greenBox2 = greenBox.style.height;
console.log(greenBox2);