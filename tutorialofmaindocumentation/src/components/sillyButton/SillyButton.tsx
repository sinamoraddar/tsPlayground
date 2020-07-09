import React, { useCallback } from "react";

const SillyButton = () => {
  const sillyHandler = useCallback((message: string) => {
    alert(message);
  }, []);
  return (
    <button onClick={sillyHandler.bind(null, "hellow")}>
      i'm the silly button
    </button>
  );
};

export default SillyButton;
