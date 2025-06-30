import React, { SVGProps } from 'react';

export default function EiffelTowerIcon(props: SVGProps<any>) {
  const style = {
    fill: "none",
    strokeMiterlimit: 10,
    strokeWidth: "1.91px"
  };
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path style={style} d="M20.61,22.5H15.83a3.83,3.83,0,0,0-7.66,0H3.39l3.83-6.7h9.56Z" />
      <polygon style={style} points="15.83 15.8 8.17 15.8 9.13 11.98 14.87 11.98 15.83 15.8" />
      <path style={style} d="M12,.5h0a35.37,35.37,0,0,1-1.81,11.18l-.1.3" />
      <path style={style} d="M12,.5h0a35.37,35.37,0,0,0,1.81,11.18l.1.3" />
      <line style={style} x1="10.09" y1="2.41" x2="13.91" y2="2.41" />
    </svg>
  );
}
