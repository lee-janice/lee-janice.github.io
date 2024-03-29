import React from "react"
import PropTypes from "prop-types"

/* remixed from https://github.com/insin/gatsby-plugin-dark-mode/blob/master/src/ThemeToggler.js */
class ThemeToggler extends React.Component {
    state = {
        theme: typeof window !== "undefined" ? window.__theme : "light-classic",
        darkMode:
            typeof window !== "undefined"
                ? window.__theme.toString().includes("dark")
                : false,
        modernMode:
            typeof window !== "undefined"
                ? window.__theme.toString().includes("modern")
                : false,
    }

    componentDidMount() {
        window.__setPreferredTheme(
            (this.state.darkMode ? "dark" : "light") +
                "-" +
                (this.state.modernMode ? "modern" : "classic")
        )
        window.__onThemeChange = () => {
            this.setState({ ...this.state, theme: window.__theme })
        }
    }

    toggleDarkMode = checked => {
        this.state.darkMode = checked
    }

    toggleModernMode = checked => {
        this.state.modernMode = checked
    }

    toggleTheme = () => {
        window.__setPreferredTheme(
            (this.state.darkMode ? "dark" : "light") +
                "-" +
                (this.state.modernMode ? "modern" : "classic")
        )
    }

    render() {
        return (
            <this.props.children
                darkMode={this.state.darkMode}
                modernMode={this.state.modernMode}
                theme={this.state.theme}
                toggleDarkMode={this.toggleDarkMode}
                toggleModernMode={this.toggleModernMode}
                toggleTheme={this.toggleTheme}
                className="theme-toggler"
            />
        )
    }
}

ThemeToggler.propTypes = {
    children: PropTypes.func.isRequired,
}

export default ThemeToggler
