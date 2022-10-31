// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group5Icon(props: Group5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 30"}
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
          "M14.42 0c2.46 0 3.797.39 4.011 1.173l3.63 11.501 3.692 15.332c.072.254.112.488.112.703a.62.62 0 01-.271.514c-.183.14-.788.212-1.815.212-3.175 0-4.866-.477-5.077-1.429l-1.878-7.716h-7.48l-1.656 7.76c-.108.523-.239.866-.398 1.04-.16.178-.382.278-.669.3a15.28 15.28 0 01-1.384.045H3.74c-1.253 0-2.037-.053-2.355-.156-.788-.201-1.234-.424-1.337-.67A1.382 1.382 0 010 28.274c0-.103.37-1.753 1.114-4.947.752-3.2 1.671-7.013 2.754-11.435 1.09-4.427 1.806-7.328 2.148-8.698.339-1.377.526-2.15.558-2.323C6.709.291 9.327 0 14.42 0zm-1.59 4.913l-2.467 10.832h5.3L12.829 4.913z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group5Icon;
/* prettier-ignore-end */
