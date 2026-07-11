export default function EditProfileForm() {
  return (
    <form className="popup__form" id="edit-profile-form" noValidate>
      <input
        className="popup__input popup__input_type_name"
        id="profileName"
        name="profileName"
        placeholder="Nombre"
        type="text"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="profileName-input-error popup__input-error"></span>

      <input
        className="popup__input popup__input_type_description"
        id="profileAbout"
        name="profileAbout"
        placeholder="Acerca de mí"
        type="text"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="profileAbout-input-error popup__input-error"></span>

      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
