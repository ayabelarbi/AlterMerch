// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2Icon(props: Group2IconProps) {
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

      <path
        d={
          "M86.332 121.136C38.638 121.136 0 93.845 0 60.568 0 27.294 38.638 0 86.332 0c47.694 0 86.332 27.107 86.332 60.568 0 33.464-38.904 60.568-86.332 60.568zm0-117.398c-44.766 0-81.004 25.424-81.004 56.83s36.238 56.83 81.004 56.83c44.766 0 81.004-25.424 81.004-56.83s-36.505-56.83-81.004-56.83z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
