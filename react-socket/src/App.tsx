import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WebSocketProvider, useWebSocket } from "./context/WebSocketContext";
import HomePage from "./pages/HomePage.tsx";
import Header from "./components/home/Header.tsx";
import Footer from "./components/home/Footer.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import Messages from "./components/messaging/Messages.tsx";
import './index.css';


const App: React.FC = () => {
    const { username, setUsername } = useWebSocket();

    useEffect(() => {
        if (!username && !localStorage.getItem("username")) {  // Check if username is not already set
            const user = prompt("Enter your username:");
            if (user) {
                setUsername(user);
                localStorage.setItem("username", user); // Save username to localStorage to prevent prompt on reload
            } else {
                alert("Username is required to join the chat.");
            }
        }
    }, [username, setUsername]);


    return (
        <Router>
            <div className="wrapper">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Messages />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

const AppWithProvider: React.FC = () => {
    return (
        <WebSocketProvider>
            <App />
        </WebSocketProvider>
    );
};

export default AppWithProvider;
