import * as React from "react";
import { InjectedProps } from "./LikeCountHOC";

const LikeArea = (props: InjectedProps) => (
  <div className="btn"><i className="heart-fill"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
      </svg></i>
  </div>
);

export default LikeArea;