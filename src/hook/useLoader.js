import React, { useState } from "react";

function useLoader(props) {
  const [busy, setBusy] = useState(props);

  return { busy, setBusy };
}

export default useLoader;
