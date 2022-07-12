import React, { useState } from "react";

function useMessage(props) {
  const [message, setMessage] = useState(props);

  const render = () => {
    return message.text != "" ? (
      <div
        className={
          message.type === "info"
            ? "alert alert-primary"
            : "alert alert-primary"
        }
        role="alert"
      >
        {message.text}
      </div>
    ) : (
      ""
    );
  };

  return { render, setMessage };
}

export default useMessage;
