console.log('Loaded!');
var el = document.getElementById('madi');
var pix= 0;
var state=true;
var move =false;
var pic = "https://scontent.fmaa2-1.fna.fbcdn.net/v/t1.0-9/15380327_1161699963948097_5793214425944409063_n.jpg?oh=d6563b06fdaa7ea509d07f91e0f532d8&oe=5B4B3FE7";
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