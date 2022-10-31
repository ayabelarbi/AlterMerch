// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group7Icon(props: Group7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 25"}
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
          "M5.077 7.794H.812c-.438 0-.68-.067-.732-.2a1.297 1.297 0 01-.08-.47c0-1.072.27-1.644.812-1.72l4.265-.602L8.07.57C8.492.19 9.315 0 10.537 0c.318 0 .62.452.907 1.351.287.902.589 2.052.907 3.45h5.126c.572 0 .859.5.859 1.497 0 1-.287 1.496-.86 1.496h-5.188V19.72l.86 4.233v.044c.031.148.031.249 0 .302-.184.192-1.075.29-2.675.29-1.603 0-2.562-.223-2.88-.67l-2.516-3.562V7.794z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group7Icon;
/* prettier-ignore-end */
