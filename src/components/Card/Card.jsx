import PopUpImage from "../PopUp/ImagePopup/ImagePopup.jsx";
import DeleteConfirmation from "../PopUp/RemoveCard/RemoveCard.jsx";

export default function Card({ CardData, handleOpenPopUp }) {
  //Atributos
  const { name, link, isLiked } = CardData;
  //componente
  const ImagePopUp = {
    title: "",
    children: <PopUpImage CardData={CardData} />,
  };
  const DeletePopUpConfirmation = {
    title: "¿Borrar elemento?",
    children: <DeleteConfirmation />,
  };

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => handleOpenPopUp(ImagePopUp)}
      />
      <button
        aria-label="Eliminar tarjeta"
        className="card__delete-button"
        type="button"
        onClick={() => handleOpenPopUp(DeletePopUpConfirmation)}
      ></button>
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Botón Me gusta"
          className="card__like-button"
          type="button"
        ></button>
      </div>
    </li>
  );
}
