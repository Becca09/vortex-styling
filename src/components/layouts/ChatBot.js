import React, { useState } from "react";
import { MdChat, MdClose } from "react-icons/md";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();

    // Add user message
    setMessages(prevMessages => [...prevMessages, { text: input, user: "Me" }]);

    // Fetch AI response from OpenAI
    fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
      // ...rest of the fetch code
    })
      .then((response) => response.json())
      .then((data) => {
        const aiMessage = data.choices[0].text.trim();
        // Add AI message
        setMessages(prevMessages => [...prevMessages, { text: aiMessage, user: "AI" }]);
      })
      .catch((error) => console.error(error));

    setInput("");
};


  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  const chatbotStyle = {
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 9999,
    maxHeight: "700px",
    overflowY: "auto",
    background: "white",
  };

  const messagesStyle = {
    maxHeight: "500px",
    overflowY: "auto",
    padding: "10px",
    wordWrap: "break-word",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  };

  const divmessagesStyle = {
    maxHeight: "500px",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  };

  return (
    <div>
      {isOpen ? null : (
        <div
          className="shadow-2xl w-1/12 rounded-3xl flex flex-row items-center justify-center p-2 cursor-pointer"
          onClick={handleIconClick}
          style={chatbotStyle}
        >
          <MdChat
            style={{ fontSize: "3rem", cursor: "pointer" }}
            className="secondary_text_color"
          />
        </div>
      )}{" "}
      {isOpen && (
        <div
          className="rounded-2xl shadow-2xl w-4/12 pb-5 h-auto"
          style={chatbotStyle}
        >
          <div className="">
            <div className="primary_bg flex flex-row justify-between p-3">
              <p className="font-bold text-white">Chat with Vortex AI</p>
              <MdClose
                onClick={handleIconClick}
                style={{
                  fontSize: "1rem",
                  cursor: "pointer",
                  fontWeight: "bolder",
                  color: "#FFFFFF",
                }}
              />
            </div>{" "}
            {/* This icon closes the chat */}
            <div style={divmessagesStyle}>
              {messages.map((message, index) => (
                <p
                  key={index}
                  className={`py-2 mt-3 primary_text_color${
                    message.user === "Me"
                      ? "text-left w-6/12  justify-end ml-2"
                      : "text-right justify-end"
                  } `}
                  style={messagesStyle}
                >
                  <strong>{message.user}:</strong>{" "}
                  <span className="text-left text-gray-500 ">
                    {message.text}
                  </span>
                </p>
              ))}
            </div>
            <form
              onSubmit={handleMessageSubmit}
              className="flex flex-row justify-between mx-5 mt-5"
            >
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                className=" p-3 outline"
              />

              <button
                type="submit"
                className="primary_bg text-white font-bold px-5 rounded"
              >
               Generate Image
              </button>
              <button
                type="submit"
                className="primary_bg text-white font-bold px-5 rounded"
              >
                Chat With AI
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
