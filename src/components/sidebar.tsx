import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledSideBar = styled.div`
    position: fixed;
    display: flex;
    top: 20px;
    flex-direction: column;
    width: 200px;
    max-height: 100vh;
    height: 100vh;
    overflow: hidden;

    a {
        color: white;

        &:hover {
            color: darkseagreen;
        }
    }

    @media only screen and (max-width: 600px) {
        position: relative !important;
        margin-bottom: 20px;
        width: 100% !important;
        height: 100% !important;

        img {
            max-width: 150px !important;
        }
    }
`;

const StyledInfo = styled.div`
    li,
    ul {
        list-style: none !important;
        padding-left: 0 !important;
    }
    a {
        color: rgb(240, 240, 240);
        font-weight: 400;
    }
`;

const SideBar: React.FC = () => {
    return (
        <StyledSideBar>
            <a href="/">
                <StaticImage
                    src="../images/life_and_death.png"
                    alt="Dithered image of Life and Death (Gustav Klimt)"
                    loading="eager"
                />
            </a>
            <StyledInfo>
                <h1>Placeholder for a name.</h1>
                <ul>
                    <li key={1}>
                        <Link to="/notes" activeStyle={{ color: "darkseagreen" }}>
                            Notes
                        </Link>
                    </li>
                    <li key={2}>
                        <Link to="/projects" activeStyle={{ color: "darkseagreen" }}>
                            Projects
                        </Link>
                    </li>
                    <li key={3}>
                        <a href="/20250827_lee_janice_resume.pdf" target="_blank">
                            Resume
                        </a>
                    </li>
                    <li key={4}>
                        <Link to="/writing" activeStyle={{ color: "darkseagreen" }}>
                            Writing
                        </Link>
                    </li>
                </ul>
            </StyledInfo>
        </StyledSideBar>
    );
};

export default SideBar;
