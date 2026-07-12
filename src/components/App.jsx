//react
import { useEffect, useState } from "react";
//components
import Header from "./Header/Header.jsx";
import ScreenLoader from "./ScreenLoader/ScreenLoader.jsx";
import API from "../utils/api.js";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
//contexto
import { CurrentUserContext } from "../context/CurrentUserContext.js";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  //GET cards
  useEffect(() => {
    setIsLoading(true);
    API.getUserInfo()
      .then((data) => setCurrentUser(data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <div className="page__content">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main />
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default App;
