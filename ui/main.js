console.log('Loaded!');
var el = document.getElementById('madi');
var pix= 0;
function moveIt() {
    pix = pix + 5;
    el.style.marginLeft = pix +'px';
}
el.onClick = function() {
    var int = setInterval(moveIt,1);
}