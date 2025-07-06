import { ButtonProps } from '@/shared/ui/Button';
import React from 'react';

export type BottomSlideProps = {
  variant: ButtonProps["variant"];
  title: string;
  body: string;
};

const getClass = (props: BottomSlideProps) => {
  let className = "p-2 text-2xl h-[200px] absolute -z-1 bottom-0 left-0 w-[100vw] animate-slide-up";
  switch (props.variant) {
    case "primary": className += " bg-primary-bg"; break;
    case "success": className += " bg-success-bg"; break;
    case "error": className += " bg-error-bg"; break;
  }
  return className;
};

function BottomSlide(props: BottomSlideProps) {
  return (
    <div className={getClass(props)}>
      <p className='text-lg text-default mb-2'>{props.title}</p>
      <p className='ml-4'>{props.body}</p>
    </div>
  );
}

export default BottomSlide;
