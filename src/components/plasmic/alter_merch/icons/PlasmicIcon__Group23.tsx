// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group23Icon(props: Group23IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 11"}
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
          "M6.733 9.614v-5.84L5.539 5.327H3.677l-1.114-1.53v5.806c0 .151-.008.252-.016.302-.056.117-.295.179-.717.179-1.221 0-1.83-.157-1.83-.47V.492C0 .165.418 0 1.257 0c.848 0 1.357.162 1.528.48l1.847 3.317L6.574.469c.103-.193.226-.318.366-.38C7.075.031 7.326 0 7.688 0 8.555 0 9 .168 9.025.502l.286 3.83v5.193c0 .254-.04.408-.111.47-.064.058-.283.089-.653.089-.374 0-.676-.009-.907-.023a2.228 2.228 0 01-.637-.134c-.183-.072-.27-.178-.27-.313z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group23Icon;
/* prettier-ignore-end */
