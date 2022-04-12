import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const DarkModeToggler: React.FC = () => {
    return (
        <ThemeToggler>
            {({ theme, toggleTheme }) => (
                <label style={{ float: 'right', position: 'fixed', right: 5, bottom: 5 }}>
                    <input
                        type="checkbox"
                        onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                        checked={theme === 'dark'}
                    />{' '}
                    Dark mode
                </label>
            )}
        </ThemeToggler>
    )
}

export default DarkModeToggler