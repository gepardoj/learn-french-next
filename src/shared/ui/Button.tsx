export interface ButtonProps {
  type?: "primary" | "error" | "success" | "default";
  size?: 'small' | 'medium' | 'large';
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

const getClass = (props: ButtonProps) => {
  let className = "border-2 px-3 py-1";
  if (props.disabled) className += " border-disabled text-disabled";
  else
    switch (props.type) {
      case "primary": className += " border-primary text-primary bg-primary-bg"; break;
      case "success": className += " border-success text-success bg-success-bg"; break;
      case "error": className += " border-error text-error bg-error-bg"; break;
      default: className += " border-default text-default bg-default-bg"; break;
    }
  switch (props.size) {
    case "small": className += " text-xs"; break;
    case "medium": className += " text-lg"; break;
    case "large": className += " text-3xl"; break;
  }
  return className;
};

/** Primary UI component for user interaction */
export const Button = (props: ButtonProps) => {
  const { type, label, ...other } = props;
  return (
    <button
      type="button"
      className={getClass(props)}
      {...other}
    >
      {label}
    </button>
  );
};
