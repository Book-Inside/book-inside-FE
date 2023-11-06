import { cls } from "@utils/index";

interface LoginInputProps {
  id: string;
  type: string;
  placeholder: string;
  label: string;
  icon: JSX.Element;
}

export default function LoginInput({
  id,
  type,
  placeholder,
  label,
  icon,
}: LoginInputProps) {
  return (
    <div className={cls(id === "email" ? "mb-2" : "mb-4")}>
      <label htmlFor={id} className="login_label">
        {label}
      </label>
      <div className="login_input_icon_box mb-2">
        <input
          type={type}
          id={id}
          name={id}
          className="login_input"
          placeholder={placeholder}
        />
        {icon}
      </div>
    </div>
  );
}
