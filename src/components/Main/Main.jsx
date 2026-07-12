import { useEffect, useState, useContext } from "react";
///Componentes
import PopUp from "../PopUp/Popup.jsx";
import ScreenLoader from "../ScreenLoader/ScreenLoader.jsx";
import API from "../../utils/api.js";
//Forms
import NewCardForm from "../PopUp/NewCard/NewCard.jsx";
import EditProfileForm from "../PopUp/EditProfile/EditProfile.jsx";
import ChangeAvatar from "../PopUp/Avatar/EditAvatar.jsx";
//Objetos
import Card from "../Card/Card.jsx";
//Contexto
import { CurrentUserContext } from "../../context/CurrentUserContext.js";

export default function Main(propiedades) {
  //Atributos
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const { handleOpenPopUp, handleClosePopUp, popup } = propiedades;

  //Hooks
  //get cards
  useEffect(() => {
    setIsLoading(true);
    API.getCards()
      .then((datos) => {
        setCards(datos);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  //Update Like
  async function handleCardLike(card) {
    //Revisa si hay like o no
    const isLiked = card.isLiked;

    try {
      //La clase usa la API y esta devuelve la nueva carta actualizada
      const UpdatedCard = await API.cardToggleLike(card._id, !isLiked);

      //Devuelvo un nuevo arreglo, reemplazando una carta
      setCards((cards) =>
        cards.map((currentCard) =>
          currentCard._id === UpdatedCard._id ? UpdatedCard : currentCard,
        ),
      );
    } catch (error) {
      console.error("Error al cambiar el like:", error);
    }
  }
  //Delete card
  async function handleCardDelete(card) {
    try {
      //borro la carta de la API
      await API.cardDelete(card._id);
      //Devuelvo un arreglo, tirando una carta
      setCards((cards) =>
        cards.filter((currentCard) => currentCard._id != card._id),
      );
    } catch (error) {
      console.error("Error al cambiar eliminar :", error);
    }
  }
  ///componentes
  //botones a los forms
  const FormPopup = {
    EditProfile: { title: "Editar Perfil", children: <EditProfileForm /> },
    ChangeAvatar: { title: "Cambiar Avatar", children: <ChangeAvatar /> },
    NewCard: { title: "Nuevo Lugar", children: <NewCardForm /> },
  };

  //Usando Contexto
  const { currentUser: User } = useContext(CurrentUserContext);
  //retorna
  return (
    <main className="content">
      <section className="profile page__section">
        <div
          className="profile__image-container"
          id="editprofileAvatar"
          onClick={() => handleOpenPopUp(FormPopup.ChangeAvatar)}
        >
          <img className="profile__image" src={User.avatar} alt="Avatar" />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{User.name}</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopUp(FormPopup.EditProfile)}
          ></button>
          <p className="profile__description">{User.about}</p>
        </div>
        <button
          aria-label="Agregar tarjeta"
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopUp(FormPopup.NewCard)}
        ></button>
      </section>
      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              CardData={card}
              handleOpenPopUp={handleOpenPopUp}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
      {isLoading && <ScreenLoader />}
      {popup && (
        <PopUp title={popup.title} onClose={() => handleClosePopUp()}>
          {popup.children}
        </PopUp>
      )}
    </main>
  );
}
