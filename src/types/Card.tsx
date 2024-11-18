interface CardProps {
  image: string;
  name: string;
  handleClick: (image: string) => void;
  isDisabled?: boolean;
}

export default CardProps;
