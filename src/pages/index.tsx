import * as React from "react";
import { graphql, Link } from "gatsby";
import { SEO } from "@components/seo";
7;
import { IndexLayout } from "@layouts/index-layout";

import { Card, CardContainer } from "@components/card";
import { Carousal, CarousalItem } from "@components/carousal";
import { getImage, ImageDataLike } from "gatsby-plugin-image";

import { Combine } from "@components/indexpage-parts/combine";
// Styles

import {
  youtubeGrid,
  youtubeContainer,
  atkButton,
  checkupButton,
} from "./index.module.scss";
import { Section } from "@components/section";
import { InstagramIcon, PxIcon, YoutubeIcon } from "@utilities/icon";

interface Mdx {
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    images?: Array<string>;
    background: ImageDataLike;
  };
  body: any;
  slug: string;
}

export default class IndexPage extends React.Component<{ data: any }, {}> {
  private renderArticles(nodes: Array<any>) {
    return nodes.map((node, i) => {
      const {
        fields: { slug },
        frontmatter: { excerpt, background, title, date },
      } = node;
      if (background != null) {
        return (
          <Card
            key={i}
            tagLine={date}
            image={getImage(background)}
            header={title}
            to={slug}
          >
            <p>{excerpt}</p>
          </Card>
        );
      } else
        return (
          <Card key={i} tagLine={date} header={title} to={slug}>
            <p>{excerpt}</p>
          </Card>
        );
    });
  }

  private renderProjects(nodes: Array<any>) {
    let renderedNodes = nodes.map((node, i) => {
      const {
        fields: { slug },
        frontmatter: { excerpt, title, background },
      } = node;
      return (
        <CarousalItem key={i} image={getImage(background)}>
          <div>
            <Link to={slug}>
              <b>{title}</b>
            </Link>
            <p>{excerpt}</p>
          </div>
        </CarousalItem>
      );
    });

    return <Carousal mode="cover">{renderedNodes}</Carousal>;
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { data }: { data: any } = this.props;
    const {
      blogs: { nodes: blogs },
      projects: { nodes: projects },
    } = data;
    const {
      ogimage: { ogimagePublicURL },
    } = data;

    return (
      <IndexLayout>
        <SEO
          title=""
          image={ogimagePublicURL}
          keywords={[
            `Suttisak Denduangchai`,
            `สุทธิศักดิ์ เด่นดวงใจ`,
            `Out of the box`,
          ]}
        />
        <Section title="Web applications">
          <div className="flex flex-col lg:flex-row gap-6">
            <a
              href="https://atk.doctortons.com"
              className={
                atkButton + " block rounded-xl shadow-lg pt-32 pb-6 px-6 text-gray-100 hover:text-white"
              }
            >
              <h2>ระบบข้อมูล ATK</h2>
              <div>
                พัฒนาขึ้นมาใช้ในช่วงที่ทำงานที่แผนกอาชีวเวชกรรม โรงพยาบาลราชุรี
                เพื่อใช้ในการติดตามการตรวจของเจ้าหน้าที่
              </div>
            </a>
            <a
              href="https://checkup.doctortons.com"
              className={
                checkupButton +
                " block rounded-xl shadow-lg pt-32 pb-6 px-6 text-gray-100 hover:text-white"
              }
            >
              <h2>ระบบข้อมูลการตรวจสุขภาพของแพทย์อาชีวเวชศาสตร์</h2>
              <div>
                พัฒนาขึ้นมาใช้ในช่วงที่ทำงานที่แผนกอาชีวเวชกรรม โรงพยาบาลราชุรี
                เพื่อใช้ในการตรวจสุขภาพเจ้าหน้าที่ 2500 คน
                และบริษัทเอกชนที่มาตรวจสุขภาพก่อนเข้างานและประจำปี
                เพื่อลดเวลาในการทำงาน และสามารนำข้อมูลมาวิเคราะห์ได้ง่าย
              </div>
            </a>
          </div>
        </Section>
        <Section
          className="max-h-128 md:max-h-fit"
          fullHeight
          title="Projects"
          to="/projects"
        >
          {this.renderProjects(projects)}
        </Section>
        <Section
          title="คุย Com กับหมอต้น"
          to="https://www.youtube.com/channel/UCdGwXjUz3JZhIk7b9vQRmCQ"
          arbitary={<YoutubeIcon />}
        >
          <div className={youtubeGrid}>
            <div className={youtubeContainer}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/kGMOd_cAIzg"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div>
              <h3>Youtube Vanced</h3>
              <p>
                เป็นโปรแกรมที่ช่วยให้สามารถดู Youtube บนระบบ Android
                แบบไม่มีโฆษณามากวนใจ นอกจากนี้ยังมีฟีเจอร์เด็ดอีกคือ
              </p>
              <ul className="list-disc ml-6 mt-6">
                <li>
                  สามารถเล่น Video ต่อได้ แม้ว่าจะกดสลับโปรแกรมหรือปิดหน้าจอ
                </li>
                <li>
                  โหมด Picture-in-Picture ทำให้สามารถดู Video
                  พร้อมกับใช้โปรแกรมอื่นได้
                </li>
                <li>
                  สามารถดาวน์โหลด Video (ที่ผู้สร้างอนุญาติให้เราดาวน์โหลด)
                  มาเก็บไว้ในเครื่องได้
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Blogs" to="/blogs">
          <CardContainer>{this.renderArticles(blogs)}</CardContainer>
        </Section>

        <Section
          fullHeight
          className="max-h-128 md:max-h-fit"
          title="Photography + 3D Rendering"
          to="/arts"
          arbitary={
            <div className="flex items-center gap-6">
              <InstagramIcon /> <PxIcon />
            </div>
          }
        >
          <Combine />
        </Section>
      </IndexLayout>
    );
  }
}

export const query = graphql`
  {
    blogs: allMdx(
      limit: 6
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      ...ArticlesFragment
    }
    projects: allMdx(
      limit: 6
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      ...ArticlesFragment
    }
    ogimage: file(relativePath: { eq: "main-ogimage.jpg" }) {
      publicURL
    }
  }
`;
