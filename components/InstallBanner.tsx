"use client"

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

const InstallBanner = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault()
      // Stash the event so it can be triggered later
      setDeferredPrompt(e)
      // Update UI to notify the user they can add to home screen
      setShowBanner(true)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = () => {
    // Hide the app provided install promotion
    setShowBanner(false)
    // Show the install prompt
    deferredPrompt.prompt()
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt")
      } else {
        console.log("User dismissed the install prompt")
      }
      setDeferredPrompt(null)
    })
  }

  if (!showBanner) return null

  return (
    <div className="fixed top-4 right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg flex items-center space-x-4 z-50">
      <div>
        <h3 className="font-bold">Install My Awesome PWA</h3>
        <p className="text-sm">Get quick access to our app from your home screen!</p>
      </div>
      <Button onClick={handleInstallClick}>Install</Button>
    </div>
  )
}

export default InstallBanner

