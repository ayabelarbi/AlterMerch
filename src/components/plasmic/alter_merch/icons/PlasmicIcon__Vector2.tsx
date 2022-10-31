// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 69 71"}
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
          "M69 35.5C69 55.11 53.553 71 34.5 71S0 55.11 0 35.5C0 15.901 15.447 0 34.5 0S69 15.901 69 35.5zM35.426 11.738c-7.581 0-12.417 3.286-16.214 9.127a1.753 1.753 0 00.378 2.327l4.827 3.766c.724.565 1.756.43 2.318-.304 2.486-3.243 4.19-5.124 7.972-5.124 2.842 0 6.357 1.882 6.357 4.718 0 2.144-1.72 3.244-4.526 4.863-3.272 1.888-7.602 4.237-7.602 10.115v.572c0 .949.747 1.718 1.669 1.718h7.79c.922 0 1.67-.769 1.67-1.718v-.19c0-4.075 11.572-4.244 11.572-15.27 0-8.302-8.37-14.6-16.211-14.6zm-.926 35.5c-3.529 0-6.4 2.954-6.4 6.585 0 3.63 2.871 6.584 6.4 6.584 3.529 0 6.4-2.954 6.4-6.584 0-3.631-2.871-6.585-6.4-6.585z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
