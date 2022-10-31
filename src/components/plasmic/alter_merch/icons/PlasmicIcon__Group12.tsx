// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group12Icon(props: Group12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 30"}
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
          "M13.736 9.592c2.63 0 4.56.578 5.794 1.731 1.23 1.147 1.846 3.168 1.846 6.064v11.4c0 .149-.016.25-.048.302-.183.201-.871.302-2.069.302-1.19 0-2.411-.064-3.66-.19-1.242-.129-1.863-.265-1.863-.413l-.064-11.401c0-2.798-.282-4.2-.843-4.2-1.285 0-3 .453-5.141 1.352v14.249c0 .148-.016.248-.048.301-.183.201-.871.302-2.07.302-1.189 0-2.415-.064-3.676-.19C.63 29.072 0 28.936 0 28.788V.603C0 .201.629 0 1.894 0 3.155 0 4.25.056 5.173.168 6.104.279 6.59.423 6.62.603l.971 10.832c2.706-1.229 4.751-1.843 6.144-1.843z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group12Icon;
/* prettier-ignore-end */
