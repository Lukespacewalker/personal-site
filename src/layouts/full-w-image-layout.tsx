import * as React from "react";
import { Header } from "@components/header";
import { Footer } from "@components/footer";

export const FullWidthImageLayout: React.FunctionComponent<{ header: React.ReactElement, backgroundElement: React.ReactElement }> = (props) => {
  return (
    <>
      <div className="relative h-72 lg:h-96 mb-12">
        <div className="absolute w-full h-full shadow-xl overflow-hidden">
          {props.backgroundElement}
        </div>
        <Header />
        <div className="absolute bottom-6 w-full z-1">
          {props.header}
        </div>
      </div>
      <section className="container">
        {props.children}
      </section>
      <Footer />
    </>
  )
};

/*
const withGraphQL = (Component: any) => {
    return (props: any) => {
      const data = useStaticQuery(graphql`
        query SiteTitleQuery {}
      `);
      return <Component data={data} {...props} />;
    };
  };
  */
