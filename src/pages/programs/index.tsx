import * as React from "react";
import { graphql } from "gatsby";
import { FullWidthImageLayout } from "@layouts/full-w-image-layout";
import { SEO } from "@components/seo";
import { renderVerticalContentList } from "@utilities/";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default class Index extends React.Component<{ data: any }, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      data: {
        articles,
        file: {
          publicURL
        },
      },
    } = this.props;
    return (
      <FullWidthImageLayout 
      header={<><h1 className="text-center lg:text-5xl">Softwares</h1><div  className="text-center text-sm">โปรแกรมที่สามารถดาวน์โหลดไปลองใช้งานได้</div></>} 
      backgroundElement={<div className="w-full h-96" style={{background:`linear-gradient(to right, #9796f0bb, #fbc7d4bb)`}}></div>}>
        <SEO title="Softwares" imageUrl={publicURL} />
        {renderVerticalContentList(articles.nodes)}
      </FullWidthImageLayout>
    );
  }
}

export const pageQuery = graphql`
  {
    articles: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "program" } } }
    ) {
      ...ArticlesFragment
    }
    file(relativePath: { eq: "splash/program.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(quality: 90, layout: FULL_WIDTH)
      }
    }
  }
`;