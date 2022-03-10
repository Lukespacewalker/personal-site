import * as React from "react";
import { graphql } from "gatsby";
import { SEO } from "@components/seo";
import { FullWidthImageLayout } from "@layouts/full-w-image-layout";
import { Section } from "@components/section";
import { Photos } from "@components/indexpage-parts/photos";
import { Renders } from "@components/indexpage-parts/renders";
import { InstagramIcon, PxIcon } from "@utilities/icon";

class IndexPage extends React.Component<{ data: any }, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    const { data }: { data: any } = this.props;
    const {
      ogimage: { ogimagePublicURL },
    } = data;

    return (
      <FullWidthImageLayout
        header={<><h1 className="text-center lg:text-5xl">Arts</h1><div className="text-center text-sm">3D Rendering และภาพถ่าย ที่อยากจะแชร์</div></>}
        backgroundElement={<div className="w-full h-96" style={{ background: `linear-gradient(to right, #EECDA3bb, #EF629Fbb)` }}></div>}>
        <SEO title="Projects" imageUrl={ogimagePublicURL} />
        <Section
          fullHeight
          title="3D Rendering"
        >
          <Renders />
        </Section>

        <Section
          fullHeight
          title="Photography"
          arbitary={
            <div className="flex items-center gap-6">
              <InstagramIcon /> <PxIcon />
            </div>
          }
        >
          <Photos />
        </Section>
      </FullWidthImageLayout>
    );
  }
}

export const query = graphql`
  {
    ogimage: file(relativePath: { eq: "main-ogimage.jpg" }) {
      publicURL
    }
  }
`;
export default IndexPage;
