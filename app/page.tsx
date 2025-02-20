"use client"

import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").then(
          (registration) => {
            console.log("Service Worker registration successful with scope: ", registration.scope)
          },
          (err) => {
            console.log("Service Worker registration failed: ", err)
          },
        )
      })
    }
  }, [])

  return (
    <main>
      <h1>Welcome to My Awesome PWA</h1>
      {/* Your main content goes here */}
    </main>
  )
}

