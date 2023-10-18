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
    ? "component_btn_point"
    : whiteColor
    ? "component_btn_white"
    : grayColor
    ? "component_btn_gray"
    : "";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cls("component_btn", backgroundClass)}
    >
      {text}
    </button>
  );
}
