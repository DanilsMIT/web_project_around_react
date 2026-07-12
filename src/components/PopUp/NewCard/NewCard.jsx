import { useRef } from "react";

export default function NewCardForm(propiedades) {
  const { handlePostCard } = propiedades;
  const nameInput = useRef();
  const linkInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePostCard({
      name: nameInput.current.value,
      link: linkInput.current.value,
    });
  };

  return (
    <form className="popup__form" id="new-card-form" onSubmit={handleSubmit}>
      <input
        className="popup__input popup__input_type_card-name"
        name="cardName"
        id="cardName"
        placeholder="Título"
        minLength="2"
        maxLength="30"
        type="text"
        ref={nameInput}
        required
      />
      <span className="cardName-input-error popup__input-error"></span>

      <input
        className="popup__input popup__input_type_url"
        name="cardLink"
        id="cardLink"
        placeholder="Enlace de la imagen"
        type="url"
        ref={linkInput}
        required
      />
      <span className="cardLink-input-error popup__input-error"></span>

      <button className="button popup__button" type="submit">
        Crear
      </button>
    </form>
  );
}
