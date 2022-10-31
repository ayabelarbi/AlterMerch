// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group25Icon(props: Group25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 11"}
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
          "M4.711 3.294c.9 0 1.564.198 1.99.592.422.396.637 1.092.637 2.088v3.909c0 .05-.012.083-.032.1-.056.067-.287.1-.7.1-.406 0-.824-.022-1.258-.066-.426-.04-.637-.084-.637-.134l-.016-3.909c0-.96-.103-1.44-.302-1.44-.438 0-1.019.153-1.75.458v4.89a.25.25 0 01-.017.101c-.063.067-.302.1-.716.1-.406 0-.824-.022-1.257-.066C.215 9.977 0 9.933 0 9.883V.213C0 .072.215 0 .653 0c.433 0 .811.022 1.13.067.318.04.481.087.493.145l.318 3.719c.932-.425 1.64-.637 2.117-.637z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group25Icon;
/* prettier-ignore-end */
