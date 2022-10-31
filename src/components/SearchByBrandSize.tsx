import * as React from "react";
import {
  PlasmicSearchByBrandSize,
  DefaultSearchByBrandSizeProps
} from "./plasmic/alter_merch/PlasmicSearchByBrandSize";
import { TextInputRef } from "@plasmicapp/react-web";

interface SearchByBrandSizeProps extends DefaultSearchByBrandSizeProps {}

function SearchByBrandSize_(props: SearchByBrandSizeProps, ref: TextInputRef) {
  const { plasmicProps } =
    PlasmicSearchByBrandSize.useBehavior<SearchByBrandSizeProps>(props, ref);
  return <PlasmicSearchByBrandSize {...plasmicProps} />;
}

const SearchByBrandSize = React.forwardRef(SearchByBrandSize_);

export default Object.assign(SearchByBrandSize, {
  __plumeType: "text-input"
});
