import * as React from "react";
import { Carousal, CarousalItem } from "@components/carousal";
import { getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
export const Photos: React.FunctionComponent = (props) => {
  const data = useStaticQuery(graphql`
    {
      allPhotolistJson {
        nodes {
          ...PhotoFragment
        }
      }
    }
  `);
  return (
    <Carousal>
      {data.allPhotolistJson.nodes.map((node, idx) => (
        <CarousalItem key={idx} image={getImage(node.file)}>
          <b>{node.description}</b>
          <br />
          2019-2021 © Suttisak
        </CarousalItem>
      ))}
    </Carousal>
  );
};