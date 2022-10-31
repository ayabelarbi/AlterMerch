// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group26Icon(props: Group26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 10"}
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
          "M3.756.368L2.563 7.125.748 6.98l-.302-.2.302-3.954L1.321 0l2.133.168.302.2zM1.321 9.871C.438 9.871 0 9.567 0 8.956c0-.617.438-.927 1.321-.927.88 0 1.321.31 1.321.927 0 .611-.442.915-1.32.915z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group26Icon;
/* prettier-ignore-end */
