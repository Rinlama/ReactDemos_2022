import logo from "./logo.svg";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setFormData] = useState(null);
  const [message, setMessage] = useState({
    type: 1,
    message: "",
  });

  const SendToDiscord = async () => {
    const body = {
      content: "send",
      username: "sam lama",
      tts: true,
      color: "white",
      embeds: [
        {
          title: "test",
          url: "https://discord.com/developers/applications",
          thumbnail: {
            url: "https://images.unsplash.com/photo-1656081531767-a8d25cc06335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
          },
        },
      ],
    };

    try {
      const data = await axios.post(
        "https://discord.com/api/webhooks/992792553038565438/MA_gR-B4eLz9bgxX51P-_k0crBzh6cAnvwyVcKkuu4Nt3iuh2UiIgqFq_8bt4-GnpxVW",
        body
      );
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <nav className="bg-blue-500 text-white p-3 w-screen fixed">
        React Discord API
      </nav>
      <div className="bg-gray-200 flex flex-col justify-center items-center h-screen">
        {message.type == 0 ? (
          <div className="alert my-5 p-3 rounded shadow bg-red-200 w-1/3">
            {message.message}
          </div>
        ) : (
          ""
        )}
        {message.type == 0 ? (
          <div className="alert my-5 p-3 rounded shadow bg-green-200 w-1/3">
            {message.message}
          </div>
        ) : (
          ""
        )}
        <form
          className="w-1/3 bg-white mb-4 shadow rounded p-5"
          onSubmit={(e) => {
            e.preventDefault();
            SendToDiscord();
          }}
        >
          <div className="my-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Name
            </label>
            <input
              className="w-full shadow border rounded py-2 px-3 text-gray-700  focus:outline-1 
              focus:outline-blue-400"
              type="text"
              name="name"
              placeholder="Enter name"
              onChange={(e) => {
                const value = e.target.value;
                setFormData({ name: value });
              }}
            />
          </div>
          <div className="my-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              className="w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-1 
              focus:outline-blue-400"
              type="text"
              name="email"
              placeholder="Enter email"
              onChange={(e) => {
                const value = e.target.value;
                setFormData({ ...formData, email: value });
              }}
            />
          </div>
          <div className="my-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Message
            </label>
            <textarea
              className="h-36 w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-1 focus:outline-blue-400"
              type="text"
              name="message"
              onChange={(e) => {
                const value = e.target.value;
                setFormData({ ...formData, message: value });
              }}
            ></textarea>
          </div>
          <button className="w-full bg-blue-500 p-1 rounded text-white hover:bg-blue-600">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
