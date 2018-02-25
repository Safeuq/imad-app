console.log('Loaded!');
var el = document.getElementById('madi');
var pix= 0;
var state=true;
var move =false;
function moveIt() {
    if(pix===200)
        state=false;
    if(pix===-200)
        state=true;
    if(state)
        pix = pix + 50;
    else
        pix -= 50;
    el.style.marginLeft = pix +'px';
}
var interval;
el.onclick = function () {
    if (move===false){
        interval = setInterval(moveIt,50);
        move = true;
    }
    if (move===true){
        clearInterval(interval);
        move = false;
    }
}