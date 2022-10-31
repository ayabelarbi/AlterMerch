// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconShareIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconShareIcon(props: IconShareIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 73 71"}
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
          "M45.006 0v20.1C9.001 20.1 0 40.702 0 70.35 4.68 50.451 18.002 40.2 36.005 40.2h9.001v20.1L72.01 28.542 45.006 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconShareIcon;
/* prettier-ignore-end */
