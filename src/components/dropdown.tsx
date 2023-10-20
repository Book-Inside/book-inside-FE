import { useRef, useState } from "react";

export default function Dropdown() {
  const options = ["@naver.com", "@daum.com", "@gmail.com"];
  // 드롭다운 열거나 닫는 상태
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const timeoutRef = useRef<number | null>(null);

  // 드롭다운 옵션을 담는 상태
  const [selected, setSelected] = useState<string>("");

  // input value를 담는 상태
  const [text, setText] = useState<string>("");

  /**
   * 드롭다운을 닫는 동작을 지연시키는 함수
   * 드롭다운 내부에 인터랙티브한 요소가 포함되어있다면, 그 요소를 클릭하려고 할 때 onBlur 이벤트가 발생하므로 드롭다운이 예상보다 빨리 닫힐 수 있으므로 setTimeout 으로 지연시킴.
   */
  const handleBlur = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  /**
   * 해당 타이머를 초기화하여 중복 동작을 방지하는 함수
   */
  const handleClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(!isOpen);
  };

  /**
   * 드롭다운 옵션을 클릭하였을 때 selected 변수에 담는 함수
   * @param selected
   * (ex. "@naver.com")
   */
  const handleSelect = (selected: string) => {
    setSelected(selected);
  };

  /**
   * input onChange 함수
   * @param e
   * selected 상태 값을 초기화 하고 text 상태에 value 넣어 상태 관리
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelected("");
    setText(value);
  };

  return (
    <div className="dropdown">
      <input
        className="border border-point-500"
        type="text"
        onClick={handleClick}
        onBlur={handleBlur}
        onChange={handleChange}
        value={text + selected}
      />
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
    </div>
  );
}
