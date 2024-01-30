import { createContext, useContext } from "react"

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const  ThemeProvider = ThemeContext.Provider

// Custom hook to access the context without having to pass it through props
export default function useTheme() {
    return useContext(ThemeContext)
}