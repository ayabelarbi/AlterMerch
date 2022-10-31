// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 234 165"}
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
          "M116.892 164.016C52.314 164.016 0 127.06 0 82.008 0 36.953 52.314 0 116.892 0c64.582 0 116.892 36.7 116.892 82.008 0 45.306-52.672 82.008-116.892 82.008zm0-158.955c-60.61 0-109.674 34.424-109.674 76.947s49.063 76.944 109.674 76.944c60.611 0 109.678-34.421 109.678-76.944S177.145 5.061 116.892 5.061z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
