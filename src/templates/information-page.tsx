import * as React from "react";
import { graphql } from "gatsby";
import { SEO } from "@components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Pre } from "@components/code";
import "katex/dist/katex.min.css";
import scrollTo, { scrollToId } from "@components/scroller";
import { ArticleLayout } from "@layouts/article-layout";
import { H1, H2, H3, H4, DetailTocItem, IAuthor, TOCItem } from "./template";

import "./information-page-style.scss";
class InformationPage extends React.Component<{ data: any }, {}> {
  constructor(props) {
    super(props);
    if (typeof window !== "undefined") {
      (this.target = decodeURIComponent(window.location.hash)),
        (this.target = this.target.replace("#", ""));
      // delete hash so the page won't scroll to it
      window.location.hash = "";
    }
  }
  private useTOC = false;

  private target: string;

  renderAuthors(authorsList: Array<IAuthor>) {
    const nodes = authorsList.map((author, index) => {
      const positions = author.position.map((pos, index) => (
        <div key={index}>{pos}</div>
      ));
      return (
        <div className="author" key={index}>
          <div className="image-container">
            <GatsbyImage
              image={author.avatar.childImageSharp.gatsbyImageData}
              style={{ borderRadius: `50%` }}
              alt={author.name}
            />
          </div>
          <div className="title-container">{author.name}</div>
          <div className="positions-container">{positions}</div>
        </div>
      );
    });
    return <div className="author-container">{nodes}</div>;
  }

  private renderTOCItem(tocs: Array<TOCItem>, parentIndex = 0) {
    const list = tocs.map((toc, index) => {
      if (toc.items != undefined && toc.items.length > 0)
        return (
          <DetailTocItem
            key={parentIndex + index}
            title={toc.title}
            url={toc.url}
          >
            {this.renderTOCItem(toc.items, index * 100)}
          </DetailTocItem>
        );
      else
        return (
          <li key={parentIndex + index}>
            <a href={toc.url} onClick={scrollTo}>
              {toc.title}
            </a>
          </li>
        );
    });
    return <ul>{list}</ul>;
  }

  renderTOC(tocs: Array<TOCItem>) {
    if (tocs.length > 0) {
      //this.useTOC = true;
      return (
        <div id="toc" className="toc-container">
          {this.renderTOCItem(tocs)}
        </div>
      );
    } else {
      return "";
    }
  }

  componentDidMount() {
    if (this.target !== "") {
      scrollToId(this.target);
    } else {
      this.target = "";
    }
  }

  render() {
    const {
      data: {
        mdx: {
          tableOfContents: { items },
          frontmatter: {
            title,
            type,
            background,
            images,
            date,
            authors: a,
            excerpt,
          },
          body,
        },
      },
    } = this.props;

    const authors: Array<IAuthor> = a;
    const tocs = items as Array<TOCItem>;

    let asideContent = <div></div>;
    if (authors != null || tocs != null) {
      asideContent = (
        <>
          {authors != null ? this.renderAuthors(authors) : ``}
          {tocs != null ? this.renderTOC(tocs) : ``}
        </>
      );
    }

    return (
      <ArticleLayout
        title={title}
        tagLine={date}
        GatsyImageElement={<GatsbyImage image={getImage(background)} alt={title}/>}
        aside={asideContent}
      >
        {excerpt != null ? (
          <SEO
            title={title}
            description={excerpt}
            imageUrl={background.publicURL}
            imageWidth={background.childImageSharp.original.width}
            imageHeight={background.childImageSharp.original.height}
          />
        ) : (
          <SEO title={title} description={excerpt} />
        )}
        <div className="MDXRenderer-body">
          <MDXProvider
            components={{
              // Map HTML element tag to React component
              h1: (props) => <H1 useToc={this.useTOC} {...props}></H1>,
              h2: (props) => <H2 useToc={this.useTOC} {...props}></H2>,
              h3: (props) => <H3 useToc={this.useTOC} {...props}></H3>,
              h4: (props) => <H4 useToc={this.useTOC} {...props}></H4>,
              pre: Pre,
            }}
          >
            <MDXRenderer images={images}>{body}</MDXRenderer>
          </MDXProvider>
        </div>
      </ArticleLayout>
    );
  }
}

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      tableOfContents
      frontmatter {
        title
        type
        tag
        date(formatString: "dddd, DD MMMM YYYY", locale: "th")
        authors {
          id
          name
          position
          avatar {
            childImageSharp {
              gatsbyImageData(
                quality: 90
                width: 150
                height: 150
                transformOptions: { cropFocus: NORTH }
                layout: FIXED
              )
            }
          }
        }
        excerpt
        background {
          publicURL
          childImageSharp {
            gatsbyImageData(quality: 90, layout: FULL_WIDTH)
            original {
              width
              height
            }
          }
        }
        images {
          name
          publicURL
          childImageSharp {
            gatsbyImageData(quality: 90, layout: CONSTRAINED, height: 800)
          }
        }
      }
    }
  }
`;

export default InformationPage;
