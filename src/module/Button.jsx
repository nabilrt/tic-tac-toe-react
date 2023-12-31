import clsx from "clsx";

const Button = ({ children, className, variant = "primary", ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        "px-4 py-2 rounded-md font-semibold text-sm shadow-md disabled:opacity-50 disabled:cursor-not-allowed",
        {
          "text-white bg-[#00d8ff] hover:bg-blue-400": variant === "primary",
          "text-white bg-teal-500 hover:bg-teal-700": variant === "secondary",
          "text-white bg-red-600 hover:bg-red-800": variant === "danger",
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
