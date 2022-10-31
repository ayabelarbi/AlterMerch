// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector6Icon(props: Vector6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 43 46"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#7Wyi4Xi3Dda)"}>
        <path
          d={
            "M31.043 30.037l-.291.398h1.862a1.7 1.7 0 011.245.55l8.373 8.955s0 0 0 0c.692.749.692 1.965-.008 2.714l-2.377 2.542h0c-.682.738-1.79.74-2.482 0l-8.374-8.957a1.983 1.983 0 01-.52-1.356v-1.999l-.41.343c-2.923 2.444-6.596 3.894-10.591 3.894-9.497 0-17.22-8.235-17.22-18.435S7.973.25 17.47.25s17.22 8.236 17.22 18.436c0 4.285-1.36 8.222-3.647 11.351zM6.469 18.686c0 6.482 4.91 11.749 11.001 11.749 6.1 0 11-5.276 11-11.75 0-6.482-4.908-11.748-11-11.748-6.1 0-11 5.276-11 11.749z"
          }
          stroke={"currentColor"}
          strokeOpacity={".1"}
          strokeWidth={".5"}
        ></path>
      </g>

      <defs>
        <filter
          id={"7Wyi4Xi3Dda"}
          x={"0"}
          y={"0"}
          width={"43"}
          height={"50"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"4"}></feOffset>

          <feGaussianBlur stdDeviation={"2"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}
          ></feColorMatrix>

          <feBlend
            in2={"shape"}
            result={"effect1_innerShadow_1708_106"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Vector6Icon;
/* prettier-ignore-end */
