import * as React from "react";
import { CardContainer, Card } from "@components/card";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

function mapNodes(nodes: Array<any>) {
  return nodes.map((node, idx) => (
    <Card
      key={idx}
      header={node.frontmatter.title}
      image={getImage(node.frontmatter.background)}
      to={node.fields.slug}
    >
      {node.frontmatter.excerpt}
    </Card>
  ));
}

export function renderHorizontalContentList(nodes: Array<any>) {
  return <CardContainer horizontal={true}>{mapNodes(nodes)}</CardContainer>;
}

export function renderVerticalContentList(nodes: Array<any>) {
  return <CardContainer>{mapNodes(nodes)}</CardContainer>;
}
