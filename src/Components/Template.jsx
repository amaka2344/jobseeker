import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Template = ({ children }) => {
    return (
        <div>
            <Header page={"appliedjob"} />

            {children}

            <Footer />

        </div>
    )
}

export default Template;