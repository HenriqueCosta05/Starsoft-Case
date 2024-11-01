import * as React from "react";
import type { SVGProps } from "react";
const SvgBin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={22}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M18.374 8.278s-.583 7.24-.922 10.29c-.161 1.457-1.061 2.31-2.535 2.337-2.804.05-5.612.054-8.416-.005-1.418-.029-2.303-.893-2.46-2.324-.341-3.077-.922-10.298-.922-10.298m16.742-3.47H1.631m14.718 0c-.844 0-1.57-.597-1.736-1.423l-.262-1.308a1.376 1.376 0 0 0-1.33-1.02h-4.55c-.622 0-1.168.417-1.33 1.02l-.26 1.308a1.77 1.77 0 0 1-1.737 1.423"
    />
  </svg>
);
export default SvgBin;
