// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group11Icon(props: Group11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 20"}
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
          "M17.89 1.273c.255.106.382.34.382.704 0 .357-.127.837-.382 1.44-.457 1.094-.955 1.558-1.496 1.385h-.048l-1.862-.525c-1.042-.327-2.3-.492-3.772-.492-1.476 0-2.42.43-2.833 1.285-.414.848-.621 2.487-.621 4.913 0 2.42.259 4.05.78 4.891.517.835 1.504 1.25 2.96 1.25 2.101 0 3.74-.083 4.919-.256a93.962 93.962 0 011.814-.268c.255-.05.462.05.62.301.16.246.24.835.24 1.765 0 .924-.287 1.435-.86 1.53a36.293 36.293 0 01-6.51.602c-4.31 0-7.258-.717-8.85-2.155C.789 16.208 0 13.601 0 9.827c0-2.725.342-4.78 1.035-6.164.7-1.39 1.814-2.348 3.342-2.87C5.905.265 8.125 0 11.047 0c2.928 0 5.192.424 6.796 1.273h.047z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group11Icon;
/* prettier-ignore-end */
