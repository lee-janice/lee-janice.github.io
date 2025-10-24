import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import SideBar from "../components/sidebar";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <main>
            <SideBar />
            <div className="content">
                <h1 style={{ marginTop: "0px" }}>This is Janice.</h1>
                <div>Welcome to my cozy little prismatic corner of the Internet.</div>
                <p>
                    I am an info-collector, aspiring researcher, and occasional contemplator/meaning-seeker based in New
                    York City. I'm currently working as a Data Production Specialist at the{" "}
                    <a href="https://steinhardt.nyu.edu/research-alliance" target="_blank">
                        Research Alliance for New York City Schools
                    </a>{" "}
                    @ NYU Steinhardt, where we conduct K-12 education policy research on, for, and with NYC Public
                    Schools. I am also pursuing a masters in{" "}
                    <a
                        href="https://steinhardt.nyu.edu/degree/ms-applied-statistics-social-science-research"
                        target="_blank"
                    >
                        Applied Statistics for Social Science Research (A3SR)
                    </a>{" "}
                    @ NYU Steinhardt, with an expected graduation date (cross your fingers) of May 2026. I received my
                    BA in Computer Science from{" "}
                    <a href="https://www.pomona.edu/academics/departments/computer-science" target="_blank">
                        Pomona College
                    </a>{" "}
                    in 2021. Click{" "}
                    <a href="/20251023_lee_janice_resume.pdf" target="_blank">
                        here
                    </a>{" "}
                    for my full resume.
                </p>
                <p>
                    Outside of the regular business-things, I enjoy reading classic→modern literature, taking baby steps
                    into philosophy, dabbling in poetry-craft—and even less frequently, prose-work,—crawling around the
                    haunts of the City and documenting each spot in my Google Maps account, rallying at{" "}
                    <a href="https://www.instagram.com/socialcyclingnyc/?hl=en" target="_blank">
                        Thursday Night Social Rides
                    </a>
                    , and chasing my next scholarly-induced euphoric moment by attending free public lectures and other
                    tangentially-academic events around NYC.
                </p>
                <p>
                    I created this website primarily for experiential use as a centralized knowledge/content base and as
                    an outlet for my increasingly erratic thoughts and curiosities. I hope that it will be a
                    comprehensible introduction into some of the machinations of my mind, and that you will enjoy your
                    stay here!
                </p>
                <h1>Connections</h1>
                <p>
                    Bzzzt. Want to chat? Email me at <strong>[ janicel375 ] ( at ) gmail ( dot ) com</strong>. Or feel
                    free to peruse and connect with my{" "}
                    <a href="https://www.linkedin.com/in/janicelee47/" target="_blank">
                        LinkedIn
                    </a>
                    ,{" "}
                    <a href="https://github.com/lee-janice" target="_blank">
                        GitHub
                    </a>
                    , and{" "}
                    <a href="https://app.thestorygraph.com/profile/janicelee" target="_blank">
                        StoryGraph
                    </a>{" "}
                    profiles.
                </p>
            </div>
        </main>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>home</title>;
