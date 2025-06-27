import React, { createContext, useEffect, useState } from 'react';

export const  ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(
      localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
    return <ThemeContext value={{ setTheme, theme }}>
        {children}
    </ThemeContext>;
};

export default ThemeProvider;