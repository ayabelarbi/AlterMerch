// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _66567E16A5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _66567E16A5Icon(props: _66567E16A5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 234 165"}
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

      <path d={"M0 0h233.784v164.016H0V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default _66567E16A5Icon;
/* prettier-ignore-end */
