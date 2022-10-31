// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle777IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle777Icon(props: Rectangle777IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 483 80"}
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
        d={"M0 0h483v80H0V0z"}
        fill={"currentColor"}
        fillOpacity={".56"}
      ></path>
    </svg>
  );
}

export default Rectangle777Icon;
/* prettier-ignore-end */
