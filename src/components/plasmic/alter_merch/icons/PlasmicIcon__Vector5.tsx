// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector5Icon(props: Vector5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 70 67"}
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
          "M70 33.5C70 52.006 54.329 67 35 67S0 52.006 0 33.5C0 15.005 15.671 0 35 0s35 15.005 35 33.5zM35.94 11.077c-7.692 0-12.597 3.1-16.45 8.612a1.579 1.579 0 00.384 2.196l4.897 3.554c.735.533 1.781.407 2.352-.286 2.521-3.061 4.25-4.836 8.087-4.836 2.883 0 6.45 1.776 6.45 4.452 0 2.023-1.745 3.062-4.592 4.59-3.32 1.78-7.713 3.998-7.713 9.544v.54c0 .896.758 1.622 1.693 1.622h7.904c.935 0 1.693-.726 1.693-1.621v-.18c0-3.845 11.74-4.005 11.74-14.41 0-7.834-8.49-13.777-16.446-13.777zm-.94 33.5c-3.58 0-6.492 2.787-6.492 6.213 0 3.427 2.912 6.214 6.492 6.214s6.492-2.787 6.492-6.214c0-3.426-2.912-6.213-6.492-6.213z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
