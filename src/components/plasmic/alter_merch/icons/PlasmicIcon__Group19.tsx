// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group19Icon(props: Group19IconProps) {
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
          "M4.393 6.186c-.637.402-1.206.603-1.703.603a8.72 8.72 0 01-1.21-.067 2.037 2.037 0 01-.811-.301 1.316 1.316 0 01-.526-.692C.048 5.424 0 5.025 0 4.534c0-.698.481-1.176 1.448-1.43l2.627-.48c-.012-.558-.092-.916-.24-1.072-.15-.162-.469-.246-.954-.246-.49 0-.907.056-1.257.168l-.653.179H.955c-.107.039-.203 0-.286-.112C.446 1.223.333.969.333.781c0-.184.02-.29.064-.312C.438.447.462.433.462.424 1.074.142 1.866 0 2.833 0c.975 0 1.723.095 2.244.28.53.178.912.507 1.146.982.243.469.367 1.172.367 2.11l-.032 3.216c0 .05-.016.084-.048.1-.044.068-.27.101-.684.101-.764 0-1.146-.067-1.146-.2l-.287-.403zm-2.356-1.63c0 .62.259.946.78.983.35 0 .605-.045.764-.134.338-.162.51-.774.51-1.832-.637.062-1.142.185-1.513.369-.362.187-.54.39-.54.614z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group19Icon;
/* prettier-ignore-end */
