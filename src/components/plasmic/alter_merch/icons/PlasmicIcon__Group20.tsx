// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group20Icon(props: Group20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 10"}
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
          "M0 .168C0 .056.223 0 .668 0c.446 0 .86.022 1.242.067.39.045.593.095.605.145l1.64 4.4L5.57.212C5.623.072 5.818 0 6.16 0c.676 0 1.122.028 1.337.078.223.053.334.09.334.112l-3.66 9.28c-.057.133-.252.2-.59.2-.342 0-.62-.008-.843-.022-.478-.045-.709-.106-.685-.179a.14.14 0 01.016-.067l.94-2.814L.015.234V.212A.107.107 0 010 .168z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group20Icon;
/* prettier-ignore-end */
