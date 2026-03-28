const PrimaryBtn = ({
  children,
  onClick,
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full
        flex items-center justify-center
        gap-3 md:gap-4

        px-5 py-4 md:py-5
        mt-4

        bg-purple-600
        text-white

        text-base md:text-xl font-semibold

        rounded-xl md:rounded-2xl
        shadow-md

        transition-all duration-200

        hover:bg-purple-700
        hover:scale-[1.02]
        hover:shadow-lg

        active:scale-[0.98]

        ${disabled ? "opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-md" : ""}
      `}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
