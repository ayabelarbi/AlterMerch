// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group16Icon(props: Group16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 7"}
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
          "M3.486 6.79c-1.317 0-2.229-.246-2.738-.738C.247 5.555 0 4.662 0 3.372c0-.92.111-1.624.334-2.11C.565.77.915.442 1.384.268 1.863.089 2.555 0 3.47 0c.923 0 1.615.095 2.085.28.477.178.82.513 1.035 1.004.222.486.334 1.178.334 2.077v.156c0 .054-.144.101-.43.146a7.887 7.887 0 01-1.035.056H2.642c.02 1.004.12 1.574.303 1.708.103.075.286.112.54.112 1.592 0 2.683-.056 3.28-.168.02-.014.035-.022.047-.022.084-.014.152.022.207.111.064.084.096.285.096.604 0 .312-.104.488-.303.524-.501.134-1.607.201-3.326.201zm-.844-5.104v1.005H4.49c-.056-.996-.2-1.496-.43-1.496-.414 0-.756.044-1.019.134-.267.084-.398.2-.398.357z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group16Icon;
/* prettier-ignore-end */
