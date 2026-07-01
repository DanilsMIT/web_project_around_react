export default function ChangeAvatarForm() {
  return (
    <form className="popup__form" id="change-avatar-form">
      <input
        className="popup__input popup__input_type_url"
        name="avatarLink"
        id="avatarLink"
        placeholder="Enlace de la imagen"
        required
        type="url"
      />
      <span className="avatarLink-input-error popup__input-error"></span>

      <button className="button popup__button" type="submit">
        Cambiar Imagen
      </button>
    </form>
  );
}
