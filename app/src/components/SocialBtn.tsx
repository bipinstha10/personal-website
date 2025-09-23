type btnProps = {
  destination: string;
  icon: string;
};
const SocialBtn = ({ destination, icon }: btnProps) => {
  return (
    <div>
      <button className="w-8 cursor-pointer hover:scale-125 transition dark:border-1 rounded-full dark:bg-white">
        <a href={destination}>
          <img src={icon} />
        </a>
      </button>
    </div>
  );
};

export default SocialBtn;
