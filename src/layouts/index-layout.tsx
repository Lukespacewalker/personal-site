import * as React from "react";
import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { Intro } from "@components/indexpage-parts/intro";
export const IndexLayout: React.FunctionComponent = (props) => {
    return (
        <>
            <Header />
            <div className="container p-6">
                <Intro />
                {props.children}
            </div>
            <Footer />
        </>
    )
};
