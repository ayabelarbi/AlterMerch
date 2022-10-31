// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group15Icon(props: Group15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 7"}
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
          "M2.149.726C3.144.243 3.804 0 4.122 0a2.8 2.8 0 01.892.134c.262.084.453.167.573.257l.175.111c-.191.553-.334.9-.43 1.039a.465.465 0 01-.398.201c-.159 0-.374-.047-.636-.145a2.036 2.036 0 00-.7-.145c-.204 0-.618.134-1.242.402v4.734c0 .05-.012.084-.032.1-.044.068-.267.101-.669.101-.406 0-.78-.022-1.13-.067C.175 6.683 0 6.64 0 6.588V.212C0 .072.275 0 .828 0c.549 0 .867.073.955.212v.022l.366.492z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group15Icon;
/* prettier-ignore-end */
