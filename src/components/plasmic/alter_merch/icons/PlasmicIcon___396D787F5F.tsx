// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _396D787F5FIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _396D787F5FIcon(props: _396D787F5FIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 173 122"}
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

      <path d={"M0 0h172.664v121.136H0V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default _396D787F5FIcon;
/* prettier-ignore-end */
