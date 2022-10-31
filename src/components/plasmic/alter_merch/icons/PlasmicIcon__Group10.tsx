// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group10Icon(props: Group10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 20"}
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
          "M27.36 19.195v-11.4c0-2.798-.286-4.2-.859-4.2-1.241 0-3.04.49-5.396 1.464.18.932.271 1.842.271 2.735v11.401c0 .148-.016.249-.048.302-.183.201-.871.302-2.069.302-1.19 0-2.42-.065-3.693-.19-1.265-.129-1.894-.266-1.894-.414V6.41c-.063-1.876-.346-2.814-.843-2.814-1.285 0-3 .452-5.141 1.35v14.25c0 .147-.016.248-.048.301-.183.201-.871.302-2.07.302-1.189 0-2.415-.065-3.676-.19C.63 19.48 0 19.343 0 19.195V.604C0 .201.708 0 2.133 0 4.38 0 5.666.201 5.985.603c0 .053.016.078.047.078L7.052 2.1C10.042.701 12.271 0 13.735 0c3.128 0 5.245.801 6.35 2.4C23.367.802 25.806 0 27.41 0c2.642 0 4.572.578 5.793 1.73 1.23 1.148 1.846 3.17 1.846 6.064v11.401c0 .148-.015.249-.047.302-.183.201-.872.302-2.07.302-1.19 0-2.415-.065-3.676-.19-1.265-.129-1.894-.266-1.894-.414z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group10Icon;
/* prettier-ignore-end */
