import { useState } from "react";

///Componentes
import PopUp from "../PopUp/Popup.jsx";
//Forms
import NewCardForm from "../PopUp/NewCard/NewCard.jsx";
import EditProfileForm from "../PopUp/EditProfile/EditProfile.jsx";
import ChangeAvatar from "../PopUp/Avatar/EditAvatar.jsx";
//Objetos
import Card from "../Card/Card.jsx";
//images
import Avatar from "../../images/avatar.jpg";

//constantes
const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

export default function Main() {
  //Atributos
  const [popup, setPopup] = useState(null);
  ///componentes
  //forms
  const NewCardFormPopUp = { title: "Nuevo Lugar", children: <NewCardForm /> };
  const EditProfileFormPopUp = {
    title: "Editar Perfil",
    children: <EditProfileForm />,
  };
  const ChangeAvatarFormPopUp = {
    title: "Cambiar Avatar",
    children: <ChangeAvatar />,
  };
  //funciones
  function handleOpenPopUp(popup) {
    setPopup(popup);
  }

  function handleClosePopUp() {
    setPopup(null);
  }
  //retorna
  return (
    <main className="content">
      <section className="profile page__section">
        <div
          className="profile__image-container"
          id="editprofileAvatar"
          onClick={() => handleOpenPopUp(ChangeAvatarFormPopUp)}
        >
          <img className="profile__image" src={Avatar} alt="Avatar" />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Danilo Isaac</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopUp(EditProfileFormPopUp)}
          ></button>
          <p className="profile__description">Aventurero</p>
        </div>
        <button
          aria-label="Agregar tarjeta"
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopUp(NewCardFormPopUp)}
        ></button>
      </section>
      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              CardData={card}
              handleOpenPopUp={handleOpenPopUp}
            />
          ))}
        </ul>
      </section>
      {popup && (
        <PopUp title={popup.title} onClose={() => handleClosePopUp()}>
          {popup.children}
        </PopUp>
      )}
    </main>
  );
}
