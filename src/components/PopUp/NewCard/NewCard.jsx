export default function NewCardForm() {
  return (
    <form className="popup__form" id="new-card-form">
      <input
        className="popup__input popup__input_type_card-name"
        name="cardName"
        id="cardName"
        placeholder="Título"
        minLength="2"
        maxLength="30"
        required
        type="text"
      />
      <span className="cardName-input-error popup__input-error"></span>

      <input
        className="popup__input popup__input_type_url"
        name="cardLink"
        id="cardLink"
        placeholder="Enlace de la imagen"
        required
        type="url"
      />
      <span className="cardLink-input-error popup__input-error"></span>

      <button className="button popup__button" type="submit">
        Crear
      </button>
    </form>
  );
}
