export default function PopUpImage(propiedades) {
  const { CardData } = propiedades;

  return <img alt="" className="popup__image" src={CardData.link} />;
}
