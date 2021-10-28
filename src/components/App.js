import { useState } from "react";
import AppRouter from "components/Router";
import fBase from "fBase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />;
      <footer>&copy; {new Date().getFullYear()}Nwitter</footer>
    </>
  );
}

export default App;
