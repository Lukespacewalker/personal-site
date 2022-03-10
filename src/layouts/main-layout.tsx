import * as React from "react";
import { Footer } from "@components/footer";
import { Header } from "@components/header";

export const MainLayout: React.FunctionComponent = (props) => {
    return (
        <>
            <Header />
            <div className="container p-6">{props.children}</div>
            <Footer />
        </>
    )
};