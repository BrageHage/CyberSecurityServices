type Props = {
  type: string;
};

const SoMeIcon: React.FC<Props> = ({ type }) => {
  return (
    <div>
      <img src={type} alt="logo" />
    </div>
  );
};

export default SoMeIcon;
