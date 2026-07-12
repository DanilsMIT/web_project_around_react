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
  const [popup, setPopup] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  //funciones
  //popup
  const handleOpenPopUp = (popup) => {
    setPopup(popup);
  };

  const handleClosePopUp = () => {
    setPopup(null);
  };
  //Hooks
  //GET UserInfo
  useEffect(() => {
    setIsLoading(true);
    API.getUserInfo()
      .then((data) => setCurrentUser(data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);
  //UPDATE UserInfo
  const handleUpdateUser = (data) => {
    (async () => {
      await API.updateUserInfo(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopUp();
        })
        .catch((error) => console.error(error));
    })();
  };

  return (
    <>
      <div className="page__content">
        <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
          <Header />
          <Main
            handleOpenPopUp={handleOpenPopUp}
            handleClosePopUp={handleClosePopUp}
            popup={popup}
          />
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default App;
