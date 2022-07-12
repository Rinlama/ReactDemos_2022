import React from "react";
import axios from "axios";

function DiscordService(clearForm) {
  const Send = async (data) => {
    const body = {
      content: "Message Received",
      tts: false,
      color: "white",
      embeds: [
        {
          title: "Contact Form",
          description: data,
        },
      ],
    };

    try {
      const data = await axios.post(
        "https://discord.com/api/webhooks/996488960941510757/stcmLr_BJp5ZEDW6jy7lEiuNck8XFzHqUsWG64cJRAfzF2o7qdXxSCNxXLbB36HXtpBg",
        body
      );
      console.log(data);
      clearForm();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    Send,
  };
}

export default DiscordService;
