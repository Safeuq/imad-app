var pic = "https://scontent.fmaa2-1.fna.fbcdn.net/v/t1.0-9/15380327_1161699963948097_5793214425944409063_n.jpg?oh=d6563b06fdaa7ea509d07f91e0f532d8&oe=5B4B3FE7";
var counter = 0;
var button = document.getElementById("counter");
button.onclick=function() {
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET',"http://mohamedsafeuq.imad.hasura-app.io/counter",true);
    request.send(null);
};
