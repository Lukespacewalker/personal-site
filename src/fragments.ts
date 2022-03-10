import { graphql } from "gatsby";

export const ArticlesFragment = graphql`
  fragment ArticleFragment on Mdx {
    fields {
      slug
    }
    frontmatter {
      title
      excerpt
      date(formatString: "dddd, DD MMMM YYYY", locale: "th")
      background {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
    }
  }
  fragment ArticlesFragment on MdxConnection {
    nodes {
      ...ArticleFragment
    }
  }
`;

export const PhotosFragment = graphql`
  fragment PhotoFragment on PhotolistJson {
    description
    file {
      childImageSharp {
        gatsbyImageData(quality: 90, layout: FULL_WIDTH)
      }
    }
  }
`;

export const ThreeDsFragment = graphql`
  fragment RenderFragment on RenderlistJson {
    description
    file {
      childImageSharp {
        gatsbyImageData(quality: 90, layout: FULL_WIDTH)
      }
    }
  }
`;
