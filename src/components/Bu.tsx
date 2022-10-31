import * as React from "react";
import { PlasmicBu, DefaultBuProps } from "./plasmic/alter_merch/PlasmicBu";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface BuProps extends DefaultBuProps {}

function Bu_(props: BuProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicBu.useBehavior<BuProps>(props, ref);
  return <PlasmicBu {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<BuProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<BuProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const Bu = React.forwardRef(Bu_) as any as ButtonComponentType;

export default Object.assign(Bu, {
  __plumeType: "button"
});
