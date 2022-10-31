// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group18Icon(props: Group18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 7"}
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
          "M0 .168C0 .056.223 0 .668 0c.446 0 .86.022 1.242.067.39.045.593.095.605.145l1.64 4.511L5.236 1.24c0-.09.063-.146.19-.168a3.05 3.05 0 01.558-.045c.222 0 .517.023.891.067.382.04.581.087.605.145l1.273 3.507L10.187.212c.04-.14.23-.212.573-.212.35 0 .64.008.875.022.561.045.828.11.796.19l-.016.022-2.292 6.354c-.044.134-.279.201-.7.201-.426 0-.876-.022-1.353-.067-.47-.039-.713-.083-.732-.134L6.35 4.277l-.828 2.311c-.056.134-.294.201-.716.201-.414 0-.86-.022-1.337-.067-.47-.039-.712-.083-.732-.134L.016.234V.212A.107.107 0 010 .168z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group18Icon;
/* prettier-ignore-end */
