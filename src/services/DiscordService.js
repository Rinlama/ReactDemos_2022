import React from "react";
import axios from "axios";

function DiscordServices(clearForm, setBusy, setMessage) {
  const WebHookBot = (data) => {
    const description = Object.entries(data)
      .map((d) => `${d[0]} : ${d[1]} `)
      .join("\n");

    const body = {
      content: "Message Received",
      tts: false,
      color: "white",
      embeds: [
        {
          title: "Contact Form",
          description,
        },
      ],
    };

    try {
      setBusy({ state: true });
      const { data } = axios.post(
        "https://discord.com/api/webhooks/992581065040466032/optWBiHkLQAgNO8iby8gsu3d_Tmrb2dFqOoanzBNiOxOf-q7NXzLmntgldb5e0goaOnC",
        body
      );
      clearForm();
      setBusy({ state: false });
      setMessage({
        type: "info",
        text: "Message submit.",
      });
    } catch (error) {
      setBusy({ state: false });
      console.log(error);
    }
  };

  return { WebHookBot };
}

export default DiscordServices;
