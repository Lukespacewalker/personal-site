import * as React from "react";
import { GatsbyImage, IGatsbyImageData} from "gatsby-plugin-image";
import {twoContent} from "./1-image-content.module.scss";

export const OneImageContent: React.FunctionComponent<{image:IGatsbyImageData}> = (props) => {
  return (
    <div className={twoContent}>
      <GatsbyImage
        image={props.image}
        imgStyle={{ objectFit: `contain` }}
        style={{ maxHeight: `400px` }}
        alt=""
      />
      <div>{props.children}</div>
    </div>
  );
};
