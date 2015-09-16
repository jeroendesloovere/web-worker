var count = 0;
var id;
onmessage = handleMessage;

function handleMessage(evt) {
    var data = evt.data;
    id = data.id;
	if (id == 0) {
		x = y;
	}
    if (data.message = "ping") {
        sendMessage();
    }
}

function sendMessage() {
    postMessage( {message: "pong", "count": count, "id": id } );
    count++;
    setTimeout("sendMessage()", 2500);
}
