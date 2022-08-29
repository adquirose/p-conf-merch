import React from 'react';

function ShoppingCart(props) {
  const fill = props.fill || 'black';
  const secondaryfill = props.secondaryfill || fill;
  const strokewidth = props.strokewidth || 3;
  const width = props.width || '100%';
  const height = props.height || '100%';

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill={secondaryfill}
        stroke={secondaryfill}
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeWidth={strokewidth}
      >
        <polyline
          fill="none"
          points="10 10 45 10 41 31 13 31 9 3 2 3"
          stroke={fill}
          strokeLinecap="butt"
        />
        <circle cx="15" cy="41" fill="none" r="4" />
        <circle cx="40" cy="41" fill="none" r="4" />
      </g>
    </svg>
  );
}

export default ShoppingCart;
