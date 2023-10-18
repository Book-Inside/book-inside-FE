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
    ? "btn_point"
    : whiteColor
    ? "btn_white"
    : grayColor
    ? "btn_gray"
    : "";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cls("btn", backgroundClass)}
    >
      {text}
    </button>
  );
}
