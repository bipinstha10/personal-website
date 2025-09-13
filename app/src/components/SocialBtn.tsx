type btnProps = {
  destination: string;
  icon: string;
};
const SocialBtn = ({ destination, icon }: btnProps) => {
  return (
    <div>
      <button className="w-10 cursor-pointer hover:scale-125 transition">
        <a href={destination}>
          <img src={icon} />
        </a>
      </button>
    </div>
  );
};

export default SocialBtn;
