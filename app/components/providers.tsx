"use client"
import ThemeProvider from "@/hooks/ThemeProvider"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers
