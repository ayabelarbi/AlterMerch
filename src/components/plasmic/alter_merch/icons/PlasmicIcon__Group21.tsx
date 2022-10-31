// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group21Icon(props: Group21IconProps) {
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
          "M0 3.372c0-.938.111-1.644.334-2.121A1.834 1.834 0 011.433.268C1.942.089 2.682 0 3.66 0c.975 0 1.71.09 2.212.268.51.173.876.5 1.098.983.231.477.35 1.183.35 2.121 0 1.29-.266 2.183-.795 2.68-.521.492-1.476.737-2.865.737-1.393 0-2.352-.245-2.881-.737C.259 5.555 0 4.662 0 3.372zm2.483 0c0 1.446.195 2.167.589 2.167.541 0 .939-.062 1.194-.19.135-.067.226-.19.27-.369.104-.357.16-.893.16-1.608 0-1.42-.2-2.132-.59-2.132-.732 0-1.19.12-1.368.357-.171.232-.255.823-.255 1.775z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group21Icon;
/* prettier-ignore-end */
