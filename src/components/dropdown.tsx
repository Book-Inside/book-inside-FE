import { DropdownProps } from "@interface/type";

export default function Dropdown({ isOpen, handleSelect }: DropdownProps) {
  const options = ["@naver.com", "@daum.com", "@gmail.com"];
  return (
    <>
      {isOpen && (
        <div className="dropdown_box">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown_option"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
