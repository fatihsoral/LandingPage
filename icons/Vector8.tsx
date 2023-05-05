import * as React from "react";
import { SVGProps } from "react";
const SvgVector8 = (props: SVGProps<SVGSVGElement>) => (
  <svg
  width="388"
  height="388"
    viewBox="0 0 388 388"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.85}
      d="M194.003 386.799c106.48 0 192.798-86.318 192.798-192.798S300.483 1.203 194.003 1.203 1.205 87.522 1.205 194c0 106.48 86.319 192.798 192.798 192.798Z"
      stroke="#CBCBCB"
      strokeOpacity={0.5}
      strokeWidth={0.658}
      strokeMiterlimit={10}
    />
    <path d="M14 283a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z" fill="white" />
    <path d="M18 283a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" fill="red" />
  </svg>
);
export default SvgVector8;
