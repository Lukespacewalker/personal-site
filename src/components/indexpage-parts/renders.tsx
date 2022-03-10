import * as React from "react";
import { Carousal, CarousalItem } from "@components/carousal";
import { getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

export const Renders: React.FunctionComponent = (props) => {
  const data = useStaticQuery(graphql`
    {
      allRenderlistJson {
        nodes {
          ...RenderFragment
        }
      }
    }
  `);
  return (
    <Carousal mode="contain">
      {data.allRenderlistJson.nodes.map((node, idx) => (
        <CarousalItem key={idx} image={getImage(node.file)}>
          <b>{node.description}</b>
          <br />
          2019-2021 © Suttisak
        </CarousalItem>
      ))}
    </Carousal>
  );
};

