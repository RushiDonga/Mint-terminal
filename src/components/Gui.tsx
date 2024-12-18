import React, { useEffect, useState } from "react";

const Gui = () => {
  const [rerender, setReRender] = useState<boolean>(true);
  useEffect(() => {
    rerender &&
      window.open(
        "https://rushidonga.github.io/",
        "_blank",
        "noopener,noreferrer"
      );
    setReRender(!rerender);
    // eslint-disable-next-line
  }, []);

  return <>Opening My Portfolio...</>;
};

export default Gui;
