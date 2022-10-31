// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group22Icon(props: Group22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 13"}
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
          "M6.653 1.474c-.362-.112-.792-.167-1.29-.167-.5 0-.823.164-.97.49-.151.322-.223.891-.223 1.71h1.767c.19 0 .286.172.286.513 0 .343-.095.514-.286.514H4.313v8.23c0 .05-.012.083-.031.1-.044.067-.271.1-.685.1-.414 0-.828-.022-1.241-.066-.414-.04-.621-.084-.621-.134v-8.23H.27c-.152 0-.235-.023-.255-.067A.73.73 0 010 4.299c0-.371.088-.57.27-.592l1.465-.2c0-1.385.259-2.315.78-2.792C3.032.24 4.043 0 5.539 0c.963 0 1.719.145 2.26.435h.032c.103.045.16.123.16.235 0 .106-.029.229-.08.368a1.603 1.603 0 01-.175.369.717.717 0 01-.191.234c-.064.04-.12.054-.16.045-.043-.005-.063-.014-.063-.022l-.669-.19z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group22Icon;
/* prettier-ignore-end */
