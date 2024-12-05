import CardProps from "../types/Card";

const Card = ({ image, name, handleClick, isDisabled }: CardProps) => {
  const handleCardClick = () => {
    if (!isDisabled) {
      handleClick(image);
    }
  };

  return (
    <div
      className={`card ${isDisabled ? "disabled" : ""}`}
      onClick={handleCardClick}
    >
      {isDisabled ? (
        <img
          src={"/assets/card-back.svg"}
          alt="Card Back"
          className="card-back"
        />
      ) : (
        <>
          <div className="card-top">
            <img src={image} alt={name} />
          </div>
          <div className="card-bottom">
            {!isDisabled && <div className="label">{name}</div>}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
