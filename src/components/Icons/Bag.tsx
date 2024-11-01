import * as React from "react";
import type { SVGProps } from "react";
const SvgBag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={34}
    fill="none"
    {...props}
  >
    <path
      stroke="#FF9F47"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.294 30.063h11.478c4.216 0 7.45-1.523 6.532-7.652l-1.07-8.307c-.566-3.058-2.517-4.229-4.229-4.229H9.01c-1.737 0-3.574 1.259-4.229 4.229l-1.07 8.307c-.78 5.437 2.366 7.652 6.583 7.652"
      clipRule="evenodd"
    />
    <path
      stroke="#FF9F47"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.105 9.573a5.94 5.94 0 0 1 5.94-5.94 5.94 5.94 0 0 1 5.966 5.94M11.968 15.765h.063M19.985 15.765h.063"
    />
  </svg>
);
export default SvgBag;
