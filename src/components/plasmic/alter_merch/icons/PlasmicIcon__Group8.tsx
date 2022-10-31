// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group8Icon(props: Group8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 20"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.155 19.799c-3.812 0-6.458-.726-7.943-2.178C.736 16.169 0 13.573 0 9.827 0 7.124.338 5.07 1.019 3.663 1.695 2.25 2.722 1.284 4.09.77 5.459.257 7.48 0 10.155 0s4.695.265 6.064.793c1.369.522 2.372 1.496 3.008 2.926.645 1.423.971 3.444.971 6.063v.458c0 .15-.422.287-1.257.413-.84.12-1.842.179-3.008.179h-8.23c.064 2.925.367 4.59.908 4.991.318.201.832.302 1.544.302 4.667 0 7.855-.162 9.566-.492a.624.624 0 01.159-.033c.255-.05.462.05.62.301.16.246.24.835.24 1.765 0 .924-.287 1.435-.86 1.53-1.464.401-4.707.602-9.725.602zM7.704 4.913V7.84h5.395c-.15-2.903-.565-4.355-1.241-4.355-1.21 0-2.209.128-2.992.38-.776.254-1.162.603-1.162 1.05z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group8Icon;
/* prettier-ignore-end */
