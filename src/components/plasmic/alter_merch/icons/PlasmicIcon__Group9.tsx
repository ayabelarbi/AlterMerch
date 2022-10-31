// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group9Icon(props: Group9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 20"}
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
          "M6.255 2.1C9.172.7 11.102 0 12.05 0c.943 0 1.799.128 2.563.38.764.245 1.325.497 1.687.748l.477.335c-.533 1.602-.939 2.602-1.225 3.004a1.361 1.361 0 01-1.162.592c-.478 0-1.095-.135-1.847-.402-.744-.274-1.416-.414-2.021-.414s-1.815.388-3.63 1.162v13.79c0 .148-.039.249-.11.302-.14.201-.796.302-1.974.302s-2.276-.065-3.295-.19C.502 19.48 0 19.343 0 19.195V.604C0 .201.8 0 2.403 0c1.6 0 2.531.201 2.786.603v.078L6.255 2.1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group9Icon;
/* prettier-ignore-end */
