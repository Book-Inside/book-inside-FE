import CheckXsIcon from "@assets/icons/check_xs_icon";

interface LoginCheckboxProps {
    label :string
}

export default function Login_Checkbox({label}:LoginCheckboxProps) {
    const id = `checkbox-${label.replace(/\s+/g, "-").toLowerCase()}`;
    return (
         <div className="login_check_layout">
      <div className="login_check_icon_box">
        <input type="checkbox" id={id} className="login_check" />
        <div className="absolute pointer-events-none peer-checked:bg-point-800">
          <CheckXsIcon />
        </div>
      </div>
      <label htmlFor={id} className="login_check_label">
        {label}
      </label>
    </div>
    );
}

