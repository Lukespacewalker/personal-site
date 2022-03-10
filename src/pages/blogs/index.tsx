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

      <FullWidthImageLayout title="Blogs"
        header={<><h1 className="text-center lg:text-5xl">Blogs</h1><div className="text-center text-sm">ความรู้และสิ่งน่าสนใจที่อยากจะแบ่งปัน</div></>}
        backgroundElement={<div className="w-full h-96" style={{ background: `linear-gradient(to right, #FC5C7Dbb, #6A82FBbb)` }}></div>}>
        <SEO title="Blogs" imageUrl={publicURL} />
        {renderVerticalContentList(articles.nodes)}
      </FullWidthImageLayout>
    );
  }
}

export const pageQuery = graphql`
  {
    articles: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      ...ArticlesFragment
    }
    file(relativePath: { eq: "splash/blogs.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(quality: 90, layout: FULL_WIDTH)
      }
    }
  }
`;