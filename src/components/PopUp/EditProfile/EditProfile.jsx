import { useContext, useState } from "react";
import { CurrentUserContext } from "../../../context/CurrentUserContext";

export default function EditProfileForm() {
  //Usando contexto
  const { currentUser: User, handleUpdateUser } =
    useContext(CurrentUserContext);

  const [name, setName] = useState(User.name);
  const [about, setAbout] = useState(User.about);

  //funciones
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAboutChange = (e) => {
    setAbout(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser({ name, about });
  };

  return (
    <form
      className="popup__form"
      id="edit-profile-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <input
        className="popup__input popup__input_type_name"
        id="profileName"
        name="profileName"
        placeholder="Nombre"
        type="text"
        minLength="2"
        maxLength="40"
        value={name}
        onChange={handleNameChange}
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
        value={about}
        onChange={handleAboutChange}
        required
      />
      <span className="profileAbout-input-error popup__input-error"></span>

      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
