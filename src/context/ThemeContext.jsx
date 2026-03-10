import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Check local storage for saved theme, default to 'blue'
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'blue';
    });

    // Check local storage for saved sound preference, default to 'on'
    const [soundEnabled, setSoundEnabled] = useState(() => {
        return localStorage.getItem('soundEnabled') !== 'false';
    });

    useEffect(() => {
        // Apply data-theme attribute to <html> tag
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        localStorage.setItem('soundEnabled', soundEnabled.toString());
    }, [soundEnabled]);

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
    };

    const toggleSound = () => {
        setSoundEnabled(prev => !prev);
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme, soundEnabled, toggleSound }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
