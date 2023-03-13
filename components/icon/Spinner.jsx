import React from "react";

export default function Spinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      style={{margin: "auto", background: "rgb(241, 242, 243, 0)", display: "block", shapeRendering: "auto"}}
      width="204px"
      height="204px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="rotate(0 50 50)">
        <rect
          x="46.5"
          y="24.5"
          rx="3.5"
          ry="5.5"
          width="7"
          height="11"
          fill="#0a0a0a"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.1363636363636365s"
            begin="-1.0227272727272727s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(36 50 50)">
        <rect
          x="46.5"
          y="24.5"
          rx="3.5"
          ry="5.5"
          width="7"
          height="11"
          fill="#0a0a0a"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.1363636363636365s"
            begin="-0.9090909090909091s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(72 50 50)">
        <rect
          x="46.5"
          y="24.5"
          rx="3.5"
          ry="5.5"
          width="7"
          height="11"
          fill="#0a0a0a"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.1363636363636365s"
            begin="-0.7954545454545454s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(108 50 50)">
        <rect
          x="46.5"
          y="24.5"
          rx="3.5"
          ry="5.5"
          width="7"
          height="11"
          fill="#0a0a0a"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.1363636363636365s"
            begin="-0.6818181818181818s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(144 50 50)">
        <rect
          x="46.5"
          y="24.5"
          rx="3.5"
          ry="5.5"
          width="7"
          height="11"
          fill="#0a0a0a"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.1363636363636365s"
            begin="-0.5681818181818181s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(180 50 50)">
        <rect
          x="46.5"
          y="24.5"
          rx="3.5"
          ry="5.5"
          width="7"
          height="11"
          fill="#0a0a0a"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.1363636363636365s"
            begin="-0.45454545454545453s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(216 50 50)">
        <rect
          x="46.5"
          y="24.5"
          rx="3.5"
          ry="5.5"
          width="7"
          height="11"
          fill="#0a0a0a"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.1363636363636365s"
            begin="-0.3409090909090909s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(252 50 50)">
        <rect
          x="46.5"
          y="24.5"
          rx="3.5"
          ry="5.5"
          width="7"
          height="11"
          fill="#0a0a0a"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.1363636363636365s"
            begin="-0.22727272727272727s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(288 50 50)">
        <rect
          x="46.5"
          y="24.5"
          rx="3.5"
          ry="5.5"
          width="7"
          height="11"
          fill="#0a0a0a"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.1363636363636365s"
            begin="-0.11363636363636363s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(324 50 50)">
        <rect
          x="46.5"
          y="24.5"
          rx="3.5"
          ry="5.5"
          width="7"
          height="11"
          fill="#0a0a0a"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.1363636363636365s"
            begin="0s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
    </svg>
  );
}