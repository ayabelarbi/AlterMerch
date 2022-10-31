// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group13Icon(props: Group13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 11"}
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
          "M4.95 0c.848 0 1.31.134 1.385.402l1.241 3.942 1.274 5.27c.02.084.032.162.032.235a.21.21 0 01-.096.179c-.064.044-.27.067-.62.067-1.095 0-1.68-.162-1.752-.48l-.636-2.658H3.215l-.573 2.669c-.032.178-.08.296-.143.357a.332.332 0 01-.223.1 8.507 8.507 0 01-.477.012h-.51c-.426 0-.696-.017-.811-.045-.267-.067-.422-.145-.462-.235A.428.428 0 010 9.704c0-.036.127-.603.382-1.697.263-1.1.581-2.412.955-3.931.37-1.519.613-2.513.732-2.982.116-.469.18-.731.191-.793C2.312.101 3.207 0 4.95 0zm-.54 1.686l-.844 3.719H5.38l-.971-3.719z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group13Icon;
/* prettier-ignore-end */
