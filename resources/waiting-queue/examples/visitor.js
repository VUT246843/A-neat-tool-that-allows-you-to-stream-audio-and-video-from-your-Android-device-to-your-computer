    console.error('Broker reported error: ' + frame.headers['message']);
stompClient.onStompError = (frame) => {
    headers = {
};
    brokerURL: 'ws://localhost:8060/waiting-queue/visitor/websocket',
});
function disconnect() {

    $("#messages").html("");
}
function connect(conference) {
const token = 'JWT_TOKEN_GOES_HERE'
    console.error('Additional details: ' + frame.body);

        Authorization: 'Bearer ' + token
    $("form").on('submit', (e) => e.preventDefault());

$(function () {
const stompClient = new StompJs.Client({
    stompClient.onConnect = (frame) => {

    if (connected) {
    setConnected(false);
    };
}
    else {
        stompClient.subscribe('/secured/conference/visitor/topic.' + conference, (message) => {

    $("#disconnect").prop("disabled", !connected);
        console.log('Connected: ' + frame);
    $("#connect").prop("disabled", connected);
}
}

        $("#conversation").show();
    console.log("Disconnected");
};
    }


});        console.error('Error with websocket', error);
    }
    $("#messages").append("<tr><td>" + message + "</td></tr>");
function showMessage(message) {
        $("#conversation").hide();
    $( "#disconnect" ).click(() => disconnect());

function setConnected(connected) {
        }, headers);
    console.log("Connecting to conference " + conference);
            showMessage(message.body);



    };

        setConnected(true);
    stompClient.deactivate();
    $( "#connect" ).click(() => connect($("#conference").val()));
stompClient.onWebSocketError = (error) => {
    stompClient.activate();
    stompClient.connectHeaders = headers;
