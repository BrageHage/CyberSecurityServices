type Props = {
  title: string;
  description: string;
  image: string;
};

const Card = ({ title, description, image }: Props) => {
  return (
    <div className="flex flex-col w-96 h-96 bg-white rounded-lg">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
