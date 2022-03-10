import * as React from "react";
import { graphql, Link } from "gatsby";
import { FullWidthImageLayout } from "@layouts/full-w-image-layout";
import { SEO } from "@components/seo";

const browser = typeof window !== "undefined" && window;

class Page404 extends React.Component<{ data: any }, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      data: {
        file: {
          childImageSharp: { gatsbyImageData },
        },
      },
    } = this.props;
    return (
      browser && (
        <FullWidthImageLayout image={gatsbyImageData} title="404: ไม่พบหน้านี้">
          <p>โปรดตรวจสอบ URL ใหม่อีกครั้ง</p>
          <p>
            หรือกลับไปยัง <Link to="/">หน้าแรก</Link>
          </p>
        </FullWidthImageLayout>
      )
    );
  }
}

export const pageQuery = graphql`
  {
    file(relativePath: { eq: "splash/404.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 90, layout: FULL_WIDTH)
      }
    }
  }
`;

export default Page404;
