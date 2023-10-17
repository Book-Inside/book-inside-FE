import { BtnProps } from "@interface/type";
import { cls } from "@utils/index";

export default function Btn({
  text,
  onClick,
  color,
  disabled = false,
}: BtnProps) {
  const pointColor = color === "point";
  const whiteColor = color === "white";
  const grayColor = color === "gray";

  const backgroundClass = pointColor
    ? "bg-point-900 text-white focus:bg-point-focus hover:bg-point-focus disabled:bg-disable_bg disabled:text-disable_text"
    : whiteColor
    ? "bg-white text-point-900 border border-point-900 focus:border focus:border-point-focus hover:border hover:border-point-focus disabled:text-disable_text disabled:bg-white disabled:border-gray-100 disabled:border"
    : grayColor
    ? "bg-gray-50 text-gray-500 focus:bg-gray-100 focus:text-gray-600 hover:bg-gray-100 hover:text-gray-600 disabled:bg-gray-50 disabled:text-gray-200"
    : "";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cls(
        "w-full font-semibold py-[17.5px] rounded-lg ",
        backgroundClass,
      )}
    >
      {text}
    </button>
  );
}
