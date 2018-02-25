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
        pix = pix + 5;
    else
        pix -= 5;
    el.style.marginLeft = pix +'px';
}
el.onclick = function () {
    if (move===false){
        var interval = setInterval(moveIt,5);
        move = true;
    }
}