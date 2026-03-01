The flow is depicted below:
It allows moderators to connect to the /moderator websocket and wait for the status message to be published on /secured/conference/state/topic.{conference} topic (triggered every 15 seconds).
## Sample code
### Visitors




More on [STOMP](https://stomp.github.io/stomp-specification-1.2.html).
            showMessage(message.body);
        setConnected(true);

    stompClient.connectHeaders = headers;
```

It allows visitors to connect to the /visitors websocket and wait for the start message to be published on /secured/conference/visitor/topic.{conference} topic.
> Note: CONNECT and MESSAGE STOMP frames expect an additional header for Authorization

![Topics](img/waiting-queue-topics.png)
## Authentication
```
| WS /visitor |  WebSocket/STOMP | require client token for conference | Visitors open a websocket and wait to receive a message. Message format is not very important, since we’re starting with a single message – “ready to join”. But keep it extensible. If a conference is already live when a visitor opens the ws, immediately send a notification | 

This endpoint should accept only moderator's jaas tokens for a conference specified as param to the endpoint and the token to be valid for that room. The token for moderator contains:
        }, headers);
This endpoint should accept only visitor's jaas tokens for a conference specified as param to the endpoint and the token to be valid for that room. The token for visitors contains:

    stompClient.onConnect = (frame) => {

### Moderators

```
}
    user: {
        stompClient.subscribe('/secured/conference/visitor/topic.' + conference, (message) => {
}
# Waiting queue

        role: ‘visitor'

>
```
headers = {
    }
|----------|:-------------:|------:|------:|

The JWT token is sent at least in the CONNECT STOMP message as connect header - see sample code:


context: {
## API

## Topics
| Endpoint   |      Type      |  Auth | Use |
    };
```
    }
    user: {
The topics used:

The moderators should be able to see the visitors count.

There is sample code showing how to handle the visitor case [here](./examples/visitor.js).
![Flow](img/waiting-queue-ds.png)
        moderator: true
    };
Visitors queue service is used for managing the visitors queue for the 8x8 video meetings by keeping visitors websocket connections opened and when a moderator opens the meeting, the visitors are notified and allowed to join the meeting.
| WS /state |    WebSocket/STOMP   |   require client token for conference | Moderators use it to get the number of visitors waiting. Service sends updates for the number of visitors. To reduce traffic send updates at a minimum period and only if the count changed |
        Authorization: 'Bearer ' + token

| POST /golive | REST | require a server-to-server token for conference | Our backend calls it anytime the visitorsLive state for a conference changes from “false” to “true”, including when a conference is created with visitorsLive=true |
        console.log('Connected: ' + frame);

```

>
## Flow
context: {
