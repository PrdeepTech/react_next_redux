"use client"

import axios from "axios";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import './chatbot.css';

function ChatBot() {
    const [messages, setMessages] = useState([
        { sender: "Bot", text: "Hello! I'm ChatGPT. How can I help you?" },
    ]);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        // Add user message
        const newMessages = [...messages, { sender: "User", text: input }];
        setMessages(newMessages);

        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/chat`,
                { message: input }
            );

            setMessages([
                ...newMessages,
                { sender: "Bot", text: res.data.reply },
            ]);
        } catch (err) {
            setMessages([
                ...newMessages,
                { sender: "Bot", text: "⚠️ Error connecting to ChatGPT API" },
            ]);
        }

        setInput("");
    };

    return (
        <>
        <div className="relative">
        <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 absolute right-0 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
        {isOpen && (
            
        <div className="chatBox">
           <button className="closeBtn" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
            <h3>Chat Bot</h3>
            <div style={{ height: 300, overflowY: "auto", padding: 5, border: "1px solid #eee", marginBottom: 10 }}>
                {messages.map((msg, i) => (
                    <div key={i} style={{ textAlign: msg.sender === "User" ? "right" : "left" }}>
                        <b>{msg.sender}:</b> {msg.text}
                    </div>
                ))}
            </div>
            <div>
                <input
                    style={{ width: "75%", padding: 5 }}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button className="btnStyle" style={{ width: "20%", marginLeft: 5 }} onClick={sendMessage}>
                    Send
                </button>
            </div>
        </div>
        )}
        </div>
        </>
    );
}

export default ChatBot;
