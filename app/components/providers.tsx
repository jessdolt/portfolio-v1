"use client"
import ThemeProvider from "@/hooks/ThemeProvider"
import { Toaster } from "react-hot-toast"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <Toaster />
      {children}
    </ThemeProvider>
  )
}

export default Providers
