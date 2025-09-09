import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const StyledSideBar = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 20px;
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
        flex-direction: row;
        margin-bottom: 40px;
        width: 100% !important;
        height: 100% !important;
        border-bottom: 1px dotted white;

        img {
            max-width: 150px !important;
        }
    }
`;

const StyledInfo = styled.div`
    @media only screen and (max-width: 600px) {
        margin-top: -10px;
        margin-left: 10px;
        flex: 1;
        ul {
            margin-top: 0px !important;
        }
    }

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
                    <li key={0}>
                        <Link to="/blog" activeStyle={{ color: "darkseagreen" }}>
                            blog
                        </Link>
                    </li>
                    <li key={1}>
                        <Link to="/notes" activeStyle={{ color: "darkseagreen" }}>
                            notes
                        </Link>
                    </li>
                    <li key={2}>
                        <Link to="/projects" activeStyle={{ color: "darkseagreen" }}>
                            projects
                        </Link>
                    </li>
                    <li key={3}>
                        <Link to="/reading" activeStyle={{ color: "darkseagreen" }}>
                            reading
                        </Link>
                    </li>
                    <li key={5}>
                        <Link to="/writing" activeStyle={{ color: "darkseagreen" }}>
                            writing
                        </Link>
                    </li>
                </ul>
            </StyledInfo>
        </StyledSideBar>
    );
};

export default SideBar;
