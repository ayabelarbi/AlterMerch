// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group17Icon(props: Group17IconProps) {
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
          "M4.711 0c.9 0 1.564.198 1.99.592.422.396.637 1.091.637 2.088v3.908c0 .05-.012.084-.032.1-.056.068-.287.101-.7.101-.406 0-.824-.022-1.258-.067-.426-.039-.637-.083-.637-.134L4.695 2.68c0-.96-.103-1.44-.302-1.44-.438 0-1.019.153-1.75.457v4.891c0 .05-.009.084-.017.1-.063.068-.302.101-.716.101-.406 0-.824-.022-1.257-.067C.215 6.683 0 6.64 0 6.588V.212C0 .072.243 0 .732 0c.764 0 1.202.073 1.321.212 0 .017.004.022.016.022l.35.492C3.446.243 4.21 0 4.711 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group17Icon;
/* prettier-ignore-end */
