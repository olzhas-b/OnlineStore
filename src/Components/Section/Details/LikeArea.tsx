import * as React from "react";
import { InjectedProps } from "./LikeCountHOC";

const LikeArea = (props: InjectedProps) => (
  <div className="btn"><i className="heart-fill">like</i></div>
);

export default LikeArea;