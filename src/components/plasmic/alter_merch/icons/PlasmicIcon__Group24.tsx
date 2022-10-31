// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group24Icon(props: Group24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 7"}
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
          "M6.144.435c.083.04.127.12.127.246 0 .12-.044.285-.127.492-.16.38-.33.541-.51.48H5.62l-.637-.179c-.362-.112-.796-.167-1.305-.167-.502 0-.824.145-.971.435-.14.29-.207.854-.207 1.686 0 .827.087 1.385.27 1.675.18.29.518.436 1.02.436.72 0 1.28-.028 1.686-.09.402-.067.61-.1.621-.1.084-.014.151.022.207.111.052.084.08.285.08.604 0 .312-.096.488-.287.524a12.84 12.84 0 01-2.244.201c-1.476 0-2.491-.245-3.04-.737C.27 5.561 0 4.668 0 3.372c0-.938.115-1.641.35-2.11A1.947 1.947 0 011.496.279C2.026.095 2.79 0 3.788 0c1.007 0 1.787.145 2.34.435h.016z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group24Icon;
/* prettier-ignore-end */
