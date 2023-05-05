import * as React from "react";
import { SVGProps } from "react";
const SvgVector4 = (props: SVGProps<SVGSVGElement>) => (
  <svg
  width="250"
    height="250"
    viewBox="0 0 250 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.79}
      d="M125.002 248.886c68.42 0 123.885-55.465 123.885-123.885S193.422 1.116 125.002 1.116 1.117 56.582 1.117 125.001c0 68.42 55.465 123.885 123.885 123.885Z"
      stroke="#CBCBCB"
      strokeOpacity={0.5}
      strokeWidth={1.165}
      strokeMiterlimit={10}
    />
    <path
      d="M229 74a9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9Z"
      fill="white"
    />
    <path d="M233 74a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" fill="red" />
  </svg>
);
export default SvgVector4;
