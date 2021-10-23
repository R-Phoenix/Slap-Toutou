begin = false;
points = 0;
starttime = 0;
var slap = new Audio ('slap.mp3');
var boom = new Audio ('boom.mp3')
slap.loop = false;
boom.loop = false;
function getRnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function hit (i){
    var x=document.getElementById(i).style.opacity;
    if (x == 1){
        points+=1;
        slap.play();
    }
}
function start(){
    document.getElementById("start").style.opacity = 0;
    points=0;
    begin = true;
    document.getElementById("rank").style.visibility = "hidden";
    starttime = performance.now();
}
var timer = setInterval(function() {
    if (begin == false){
        return;
    }
    if (performance.now() - starttime >= 30500){
        document.getElementById("start").style.opacity=1;
        document.getElementById("start").innerHTML="Restart";
        begin = false;
        end();
    }
    console.log(performance.now() - starttime);
    y=getRnd(1,9);
    var p = document.getElementById(y);
    p.src="asy-t.jpg";
    t=500+(getRnd(0,4)*100);
    p.style.opacity=1;
    setTimeout(() => {
        p.src="asy.jpg";
        p.style.opacity=0.9;
    }, t);
    document.getElementById("points").innerHTML = points;
}, 700);
function end(){
    result = "Rank : ";
    if (points < 20){
        result+= "Brainless";
        var image = document.getElementById("5");
        image.src = "fail.gif";
        setTimeout(() =>{
            boom.play();
        },500)
        setTimeout(() => {
            image.src="asy.jpg";
        },2000);
    }
    else if (points < 25)
        result+="Ugly Baka";
    else if (points < 30)
        result+="Nice";
    else
        result+="Smart and Cute like Phoenix";
    var rank = document.getElementById("rank");
    rank.style.visibility = "visible";
    rank.innerHTML=result;
}