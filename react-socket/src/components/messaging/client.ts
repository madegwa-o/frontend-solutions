import { Client } from "@stomp/stompjs";
import SockJS from 'sockjs-client';

const URL = "http://localhost:8080/ws"; // Your WebSocket endpoint

const client: Client = new Client({
    brokerURL: URL,
    connectHeaders: {},
    debug: (str) => console.log(str),
    reconnectDelay: 5000,
    webSocketFactory: () => new SockJS(URL),
});

export default client;
