import * as React from "react";
import { SVGProps } from "react";
const SvgVector2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
  width="182"
    height="182"
    viewBox="0 0 182 182"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.79}
      d="M91.003 180.428c49.39 0 89.429-40.038 89.429-89.428S140.393 1.572 91.003 1.572 1.575 41.61 1.575 91s40.039 89.428 89.428 89.428Z"
      stroke="#CBCBCB"
      strokeOpacity={0.5}
      strokeWidth={1.418}
      strokeMiterlimit={10}
    />
    <path
      d="M130 166a9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9Z"
      fill="white"
    />
    <path d="M134 166a5 5 0 1 1 10.001.001A5 5 0 0 1 134 166Z" fill="red" />
  </svg>
);
export default SvgVector2;
