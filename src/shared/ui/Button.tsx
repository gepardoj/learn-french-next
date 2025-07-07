"use client";
export interface ButtonProps {
  variant?: "primary" | "error" | "success" | "default";
  size?: 'small' | 'medium' | 'large';
  label: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const getClass = (props: ButtonProps) => {
  let className = "border-2 rounded-sm px-3 py-1";
  if (props.disabled) className += " border-disabled text-disabled";
  else
    switch (props.variant) {
      case "primary": className += " border-transparent text-white bg-primary"; break;
      case "success": className += " border-transparent text-white bg-success"; break;
      case "error": className += " border-transparent text-white bg-error"; break;
      default: className += " border-transparent text-default bg-default-bg"; break;
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
  const { variant, label, size = "medium", className, ...other } = props;
  return (
    <button
      type="button"
      className={className + " " + getClass({ ...props, size })}
      {...other}
    >
      {label}
    </button>
  );
};
