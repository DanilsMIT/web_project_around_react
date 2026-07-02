export default function PopUpImage(propiedades) {
  const { CardData } = propiedades;

  return (
    <>
      <img alt={CardData.name} className="popup__image" src={CardData.link} />
      <p class="popup__caption">{CardData.name}</p>
    </>
  );
}
