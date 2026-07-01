export default function PopUp(propiedades) {
  //atributos
  const { onClose, title, children } = propiedades;
  let popup_content_class = "popup__content";

  if (title == "Cambiar Avatar" || title == "¿Borrar elemento?") {
    popup_content_class += " popup__content_type-small";
  } else if (!title) {
    popup_content_class += " popup__content_content_image";
  }

  return (
    <>
      <div className="popup">
        <div className={popup_content_class}>
          <button
            aria-label="Cerrar ventana emergente"
            className="popup__close"
            type="button"
            onClick={onClose}
          ></button>
          {title && <h3 className="popup__title">{title}</h3>}
          {children}
        </div>
      </div>
    </>
  );
}
