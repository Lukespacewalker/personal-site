import * as React from "react";
import { graphql } from "gatsby";
import { FullWidthImageLayout } from "@layouts/full-w-image-layout";
import { SEO } from "@components/seo";
import { renderVerticalContentList } from "@utilities/";

export default class Index extends React.Component<{ data: any }, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      data: {
        articles,
        file: {
          publicURL,
          childImageSharp: { gatsbyImageData: image },
        },
      },
    } = this.props;
    return (
      <FullWidthImageLayout header={<><h1 className="text-center lg:text-5xl">Projects</h1><div  className="text-center text-sm">การพัฒนาทั้งโปรแกรมและเว็บไซต์ที่ผมเป็นผู้ทำ</div></>} 
      backgroundElement={<div className="w-full h-96" style={{background:`linear-gradient(to right, #EECDA3bb, #EF629Fbb)`}}></div>}>
        <SEO title="Projects" imageUrl={publicURL} />
        {renderVerticalContentList(articles.nodes)}
      </FullWidthImageLayout>
    );
  }
}

export const pageQuery = graphql`
  {
    articles: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      ...ArticlesFragment
    }
    file(relativePath: { eq: "splash/projekt.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(quality: 90, layout: FULL_WIDTH)
      }
    }
  }
`;