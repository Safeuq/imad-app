console.log('Loaded!');
var el = document.getElementById('madi');
var pix= 0;
var state=true;
function moveIt() {
    /*if(pix===60)
        state=false;
    if(pix===-60)
        state=true;
    if(state)*/
        pix += 5;
    /*else
        pix -= 5;*/
    el.style.marginLeft = pix +'px';
}
el.onClick = function() {
    var interval = setInterval(moveIt,1);
}