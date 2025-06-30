import { ButtonProps } from "@/app/shared/ui/Button";
import { SVGProps } from "react";

export interface ButtonIconProps extends Omit<ButtonProps, "label"> {
  Icon: (props: SVGProps<any>) => React.JSX.Element;
  alt: string;
}

const getClass = (props: ButtonIconProps) => {
  let className = "";
  if (props.disabled) className += " stroke-disabled";
  else
    switch (props.type) {
      case "primary": className += " stroke-primary"; break;
      case "success": className += " stroke-success"; break;
      case "error": className += " stroke-error"; break;
      default: className += " stroke-default"; break;
    }
  switch (props.size) {
    case "small": className += " w-4 h-4"; break;
    case "medium": className += " w-6 h-6"; break;
    case "large": className += " w-8 h-8"; break;
  }
  return className;
};

/** Primary UI component for user interaction */
export const ButtonIcon = (props: ButtonIconProps) => {
  const {
    type,
    size = 'medium',
    Icon,
    ...other
  } = props;
  return (
    <button
      type="button"
      className={getClass(props)}
      {...other}
    >
      {<Icon />}
    </button>
  );
};
