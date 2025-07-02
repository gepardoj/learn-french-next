import { ButtonProps } from '@/shared/ui/Button';
import React from 'react';

type ButtonCardProps = {
  src: string;
  alt: string;
} & Omit<ButtonProps, "label">;


const getClass = (props: ButtonCardProps) => {
  let className = "border-2 w-fit h-fit";
  if (props.disabled) className += " border-disabled text-disabled";
  else
    switch (props.variant) {
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

const getImgClass = (props: ButtonCardProps) => {
  let className = "";
  switch (props.size) {
    case "small": className += " w-[64px] h-[64px]"; break;
    case "medium": className += " w-[128px] h-[128px]"; break;
    case "large": className += " w-[256px] h-[256px]"; break;
  }
  return className;
};

export default function ButtonCard(props: ButtonCardProps) {
  const { className, src, alt, size = "medium", ...other } = props;
  return (
    <button
      type="button"
      className={className + " " + getClass(props)}
      {...other}
    >
      <img className={getImgClass({ ...props, size })} src={src} alt={alt} />
    </button>
  );
}
