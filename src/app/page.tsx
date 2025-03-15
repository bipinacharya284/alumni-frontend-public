"use client";

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import MessageBubble from "./components/MessageBubble";
import ChatInput from "./components/ChatInput";
import { ImSpinner2 } from "react-icons/im";
import { FaUserCircle, FaRobot } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const HF_API_URL = "https://acharyaBipin-major.hf.space/run/predict"; // Update to your Hugging Face Space URL

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  //  Fetch response from Hugging Face
  const getBotResponse = async (userMessage: string) => {
    try {
      const response = await axios.post(
        HF_API_URL,
        { data: [userMessage] },
        { headers: { "Content-Type": "application/json" } }
      );
      const botReply = response.data?.data?.[0] || "🤖 No response from model.";
      return botReply;
    } catch (error: any) {
      console.error("Error fetching response:", error);
      return `🚨 Error: ${error.message}`;
    }
  };

  // Handle Send Button
  const handleSend = async () => {
    if (input.trim() && !loading) {
      const userMessage = { sender: "user", text: input };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setLoading(true);

      const botResponseText = await getBotResponse(userMessage.text);
      const botResponse = { sender: "bot", text: botResponseText };

      setMessages((prev) => [...prev, botResponse]);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col  h-full bg-gray-100">
      {/* Chat Area (Scrollable) */}
      <div className="flex-grow overflow-y-auto  p-4 bg-gray-50 scroll-smooth">
        {messages.length === 0 && !loading && (
          <div className="flex items-center justify-center h-full text-gray-400 text-xl">
            💬 Start your conversation here...
          </div>
        )}

        {/* Chat Messages */}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex my-2 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "bot" && (
              <div className="flex items-center">
                <FaRobot className="text-3xl text-blue-600 mr-2 self-start" />
                <div className="p-3 rounded-lg max-w-[75%] shadow-md bg-gray-300 text-black">
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            )}

            {msg.sender === "user" && (
              <div className="flex items-center justify-end">
                <div className="p-3 rounded-lg max-w-[75%] shadow-md bg-blue-500 text-white text-right">
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
                <FaUserCircle className="text-3xl text-blue-600 ml-2 self-start" />
              </div>
            )}
          </div>
        ))}

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center my-4">
            <ImSpinner2 className="animate-spin text-blue-600 text-3xl" />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/*Chat Input */}
      <ChatInput
        input={input}
        setInput={setInput}
        handleSend={handleSend}
        loading={loading}
      />
    </div>
  );
}
