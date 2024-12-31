const CustomButton = ({ borderColor, textColor, hoverBgColor, hoverTextColor}) => {
  return (
    <button
      className={`duration-300 py-4 px-[56px] rounded-lg border-2 ${hoverBgColor} ${hoverTextColor} ${borderColor} ${textColor} text-center hover:shadow-lg transition-all`}
    >
      Shop now
    </button>
  );
};

export default CustomButton;
