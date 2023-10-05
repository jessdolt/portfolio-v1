import React, { createContext, useState, useContext } from "react"

export type ThemeContext = {
  theme: boolean
  setTheme: React.Dispatch<React.SetStateAction<boolean>>
}

export const themeInitial: ThemeContext = {
  theme: false,
  setTheme: () => {},
}

export const ThemeCtx = createContext<ThemeContext>(themeInitial)

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<boolean>(themeInitial.theme)

  return (
    <ThemeCtx.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeCtx.Provider>
  )
}

export const useTheme = () => useContext(ThemeCtx)

export default ThemeProvider
