import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import client from "../components/messaging/client.ts";

interface WebSocketContextType {
    messages: string[];
    sendMessage: (message: string) => void;
    setMessages: React.Dispatch<React.SetStateAction<string[]>>;
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    username: string | null;
    setUsername: React.Dispatch<React.SetStateAction<string | null>>;
}

const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);

export const useWebSocket = () => {
    const context = useContext(WebSocketContext);
    if (!context) {
        throw new Error("useWebSocket must be used within a WebSocketProvider");
    }
    return context;
};

interface WebSocketProviderProps {
    children: ReactNode; // Explicitly include the children prop
}

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({ children }) => {
    const [messages, setMessages] = useState<string[]>([]);
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState<string | null>(null);

    const onMessageReceived = (payload: any) => {
        const newMessage = JSON.parse(payload.body);

        if (newMessage.type === "JOIN" || newMessage.type === "LEAVE") {
            newMessage.content =
                newMessage.sender + (newMessage.type === "JOIN" ? " joined!" : " left!");
            setMessages((prev) => [...prev, newMessage.content]);
        } else {
            setMessages((prev) => [...prev, newMessage.content]);
        }
    };

    const reconnectWebSocket = () => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername && !client.connected) {
            setUsername(storedUsername);

            try {
                client.onConnect = () => {
                    client.publish({
                        destination: "/app/chat.addUser",
                        body: JSON.stringify({ sender: storedUsername, type: "JOIN" }),
                    });

                    client.subscribe("/topic/public", (msg) => {
                        if (msg.body) {
                            onMessageReceived(msg);
                        }
                    });
                };

                client.activate();
                console.log("WebSocket reconnected successfully.");
            } catch (error) {
                console.error("Error reconnecting WebSocket:", error);
            }
        }
    };

    useEffect(() => {
        reconnectWebSocket();

        if (username) {
            const connectWebSocket = async () => {
                try {
                    client.onConnect = () => {
                        client.publish({
                            destination: "/app/chat.addUser",
                            body: JSON.stringify({ sender: username, type: "JOIN" }),
                        });

                        client.subscribe("/topic/public", (msg) => {
                            if (msg.body) {
                                onMessageReceived(msg);
                            }
                        });
                    };
                    await client.activate();
                } catch (error) {
                    console.error("WebSocket connection error:", error);
                }
            };

            connectWebSocket();

            return () => {
                client.deactivate();
                localStorage.removeItem("username");
            };
        }
    }, [username]);

    const sendMessage = (message: string) => {
        if (!client.connected) {
            console.error("WebSocket is not connected. Attempting to reconnect...");
            reconnectWebSocket();
            return;
        }

        if (message.trim()) {
            client.publish({
                destination: "/app/chat.sendMessage",
                body: JSON.stringify({ sender: username, content: message, type: "CHAT" }),
            });
            setMessage("");
        }
    };

    return (
        <WebSocketContext.Provider
            value={{ messages, sendMessage, setMessages, message, setMessage, username, setUsername }}
        >
            {children}
        </WebSocketContext.Provider>
    );
};
