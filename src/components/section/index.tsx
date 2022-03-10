import * as React from "react";
import { Link } from "gatsby";
import { dark } from "./section.module.scss";

export const Section: React.FunctionComponent<{
  title: string;
  to?: string;
  dark?: boolean;
  fullHeight?: boolean;
  className?:string;
  arbitary?: JSX.Element;
}> = (props) => {
  return (
    <section
      className={`mb-6 flex flex-col relative ${props.dark !== undefined ? dark : ""
        } ${props.className !== undefined ? props.className : ""
      } ${props.fullHeight !== undefined ? "h-screen" : ""}`}
    >
      <div className="flex flex-wrap gap-6 items-center mb-6">
        <h2 className="text-gradient" id={props.title.toLowerCase().replaceAll(" ", "-")}>
          {props.to !== undefined ? (
            <Link to={props.to}>{props.title}</Link>
          ) : (
            props.title
          )}
        </h2>
        <div>{props.arbitary}</div>
      </div>
      <div className="flex-1">{props.children}</div>
    </section>
  );
};
