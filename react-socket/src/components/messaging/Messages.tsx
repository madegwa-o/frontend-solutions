import React from "react";
import { useWebSocket } from "../../context/WebSocketContext";

const Messages: React.FC = () => {
    const { messages, sendMessage, setMessage, message } = useWebSocket();


    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={() => sendMessage(message)}>Send</button>
        </div>
    );
};

export default Messages;
