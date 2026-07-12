import { useContext, useRef } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

export default function EditAvatar() {
  //Contexto
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  //Vigilancia a cambios
  const avatarInput = useRef();
  //funciones
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateAvatar({ avatar: avatarInput.current.value });
  };

  return (
    <form
      className="popup__form"
      id="change-avatar-form"
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_url"
        name="avatarLink"
        id="avatarLink"
        placeholder="Enlace de la imagen"
        required
        ref={avatarInput}
        type="url"
      />

      <button className="button popup__button" type="submit">
        Cambiar Imagen
      </button>
    </form>
  );
}
