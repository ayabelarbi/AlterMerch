// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconShare2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconShare2Icon(props: IconShare2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 73 67"}
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
          "M45.625 0v19.143C9.125 19.143 0 38.764 0 67c4.745-18.951 18.25-28.714 36.5-28.714h9.125v19.143L73 27.183 45.625 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconShare2Icon;
/* prettier-ignore-end */
