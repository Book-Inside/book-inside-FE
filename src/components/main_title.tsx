import { MainTitleProps } from "@interface/type";
import { cls } from "@utils/index";

export default function MainTitle({
  leftIcon,
  leftText,
  count,
  rightText,
  rightIcon,
}: MainTitleProps) {
  return (
    <div className="flex justify-between mb-4">
      <div className="flex items-center space-x-2">
        {leftIcon}
        <span
          className={cls(
            "text-gray-900 font-bold",
            leftIcon ? "text-xl" : "text-lg",
          )}
        >
          {leftText}
        </span>
      </div>
      {leftIcon ? (
        <div className="flex font-medium items-end text-gray-500 text-sm ">
          {count}권
        </div>
      ) : (
        <div className="flex items-center space-x-1">
          <span className="text-gray-700 font-medium">{rightText}</span>
          {rightIcon}
        </div>
      )}
    </div>
  );
}
