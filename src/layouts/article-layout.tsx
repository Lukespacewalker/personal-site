import * as React from "react";
import { Header } from "@components/header";
import { Footer } from "@components/footer";

export const ArticleLayout: React.FunctionComponent<{ tagLine: string, title: string; GatsyImageElement: React.ReactElement }> = (props) => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="rounded-md sm:rounded-xl shadow-xl overflow-hidden">
          {props.GatsyImageElement}
        </div>
        <header className="flex flex-col items-center my-6">
          <div className="tagline">{props.tagLine}</div>
          <h1 className="text-center text-gradient  lg:text-5xl">{props.title}</h1>
        </header>
        <section>
          {props.children}
        </section>
      </div>
      <Footer />
    </>
  )
};