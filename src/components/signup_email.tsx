import { SignupEmailProps } from "@interface/type";
import Dropdown from "./dropdown";
import Btn from "./btn";

export default function SignupEmail({
  handleClick,
  handleBlur,
  handleChange,
  handleSelect,
  handleNext,
  email,
  selected,
  isOpen,
}: SignupEmailProps) {
  return (
    <>
      <form>
        <label htmlFor="email" className="login_label">
          이메일
        </label>
        <div className="login_input_icon_box">
          <input
            id="email"
            placeholder="이메일 @ 직접입력"
            className="login_input focus:border-point-900 focus:outline-none "
            type="text"
            onClick={handleClick}
            onBlur={handleBlur}
            onChange={handleChange}
            value={email + selected}
          />
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 h-6 absolute right-4"
            >
              <path
                d="M14.9104 13.9181C15.1414 14.1747 15.5365 14.1955 15.7931 13.9646C16.0497 13.7336 16.0705 13.3385 15.8396 13.0819L14.9104 13.9181ZM12 9.75L12.4646 9.3319C12.346 9.2002 12.1772 9.125 12 9.125C11.8228 9.125 11.654 9.2002 11.5354 9.3319L12 9.75ZM8.16044 13.0819C7.92953 13.3385 7.95033 13.7336 8.2069 13.9646C8.46347 14.1955 8.85865 14.1747 9.08956 13.9181L8.16044 13.0819ZM20.375 12C20.375 16.6254 16.6254 20.375 12 20.375V21.625C17.3157 21.625 21.625 17.3157 21.625 12H20.375ZM12 20.375C7.37462 20.375 3.625 16.6254 3.625 12H2.375C2.375 17.3157 6.68426 21.625 12 21.625V20.375ZM3.625 12C3.625 7.37462 7.37462 3.625 12 3.625V2.375C6.68426 2.375 2.375 6.68426 2.375 12H3.625ZM12 3.625C16.6254 3.625 20.375 7.37462 20.375 12H21.625C21.625 6.68426 17.3157 2.375 12 2.375V3.625ZM15.8396 13.0819L12.4646 9.3319L11.5354 10.1681L14.9104 13.9181L15.8396 13.0819ZM11.5354 9.3319L8.16044 13.0819L9.08956 13.9181L12.4646 10.1681L11.5354 9.3319Z"
                fill="#111620"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 h-6 absolute right-4"
            >
              <path
                d="M15.8396 11.2931C16.0705 11.0365 16.0497 10.6414 15.7931 10.4104C15.5365 10.1795 15.1414 10.2003 14.9104 10.4569L15.8396 11.2931ZM12 14.625L11.5354 15.0431C11.654 15.1748 11.8228 15.25 12 15.25C12.1772 15.25 12.346 15.1748 12.4646 15.0431L12 14.625ZM9.08956 10.4569C8.85865 10.2003 8.46347 10.1795 8.2069 10.4104C7.95033 10.6414 7.92953 11.0365 8.16044 11.2931L9.08956 10.4569ZM20.375 12C20.375 16.6254 16.6254 20.375 12 20.375V21.625C17.3157 21.625 21.625 17.3157 21.625 12H20.375ZM12 20.375C7.37462 20.375 3.625 16.6254 3.625 12H2.375C2.375 17.3157 6.68426 21.625 12 21.625V20.375ZM3.625 12C3.625 7.37462 7.37462 3.625 12 3.625V2.375C6.68426 2.375 2.375 6.68426 2.375 12H3.625ZM12 3.625C16.6254 3.625 20.375 7.37462 20.375 12H21.625C21.625 6.68426 17.3157 2.375 12 2.375V3.625ZM14.9104 10.4569L11.5354 14.2069L12.4646 15.0431L15.8396 11.2931L14.9104 10.4569ZM12.4646 14.2069L9.08956 10.4569L8.16044 11.2931L11.5354 15.0431L12.4646 14.2069Z"
                fill="#71767E"
              />
            </svg>
          )}
        </div>
      </form>
      <Dropdown isOpen={isOpen} handleSelect={handleSelect} />
      {!email || !selected ? (
        <div className="signup_email_text">
          본인인증을 위해 이메일을 정확하게 입력해주세요.
        </div>
      ) : (
        <></>
      )}
      <div className="bottom-[52px] fixed min-w-[342px]">
        <Btn
          disabled={!email || (selected === "" && !email.includes("@"))}
          color="point"
          text="인증번호 보내기"
          onClick={handleNext}
        />
      </div>
    </>
  );
}
