import { useEffect, useState } from "react";

const Email = () => {
  const [rerender, setReRender] = useState<boolean>(true);
  useEffect(() => {
    rerender && window.open("mailto:rushi.donga.ca@gmail.com");
    setReRender(!rerender);
  }, []);
  return <>Opening email...</>;
};

export default Email;
