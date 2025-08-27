import React from "react";
import SideBar from "./sidebar";

interface Props {
    readonly title?: string;
    readonly children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
    <>
        <main>
            <SideBar />
            {children}
        </main>
    </>
);

export default Layout;
