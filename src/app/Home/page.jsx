"use client"
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import NavBar from "../components/NavBar";
import Message from "../components/Message";

const Homepage = () => {
    const [messageText, setMessageText] = useState("");
    const [file, setFile] = useState(null);
    const [isJobOrAd, setIsJobOrAd] = useState(false);
    const [messages, setMessages] = useState([]); // State to store messages

    const handlePostMessage = () => {
        const newMessage = {
            id: messages.length + 1, // Unique identifier for the message
            author: "Current User", // Replace with actual user data
            date: new Date().toLocaleString(), // Current date and time
            content: messageText,
            // Add other relevant properties
        };

        // Add the new message at the beginning of the messages array
        setMessages([newMessage, ...messages]);

        // Clear the input fields
        setMessageText("");
        setFile(null);
        setIsJobOrAd(false);

        // Handle file upload and other logic as needed
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    return (
        <div className=" ">
        <NavBar />
        <main className="grid grid-cols-8 gap-4 px-4 py-2 pt-[4rem]"> {/* Adjusted padding-top and added overflow-auto */}
            <div className=" col-start-3 col-span-4 mt-20 border border-solid border-gray-500 bg-white">
                <div className="border bg-white"> {/* Added sticky and z-index for the input area */}
                    <textarea 
                        className="w-full p-2 rounded text-black"
                        placeholder="What's happening?"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                    />
                    <input 
                        type="file" 
                        onChange={handleFileChange} 
                    />
                    <label className="text-black">
                        <input 
                            type="checkbox" 
                            checked={isJobOrAd} 
                            onChange={(e) => setIsJobOrAd(e.target.checked)} 
                        />
                        Mark as Job Posting or Ad
                    </label>
                    <button 
                        className="bg-blue-500 text-white rounded p-2"
                        onClick={handlePostMessage}
                    >
                        Post
                    </button>
                </div>
                {messages.map((msg, index) => (
                    <Message key={index} messageData={msg} />
                ))}
            </div>
            <div className=" col col-start-1 col-end-3">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold ">SUGGESTED USERS</h2>
                    <div className="border w-full .h-full">

                    </div>
                

                </div>
                

            </div>
        </main>
    </div>
    );
};

export default Homepage;
