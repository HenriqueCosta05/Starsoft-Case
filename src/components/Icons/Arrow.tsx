import * as React from "react";
import type { SVGProps } from "react";
const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <path
      stroke="#FF8310"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.236 17.381H27.07M14.639 25.748l-8.403-8.366 8.403-8.368"
    />
  </svg>
);
export default SvgArrow;
