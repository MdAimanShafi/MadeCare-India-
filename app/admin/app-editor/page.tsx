"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AppEditorPage() {
  const router = useRouter()
  const [adminSession, setAdminSession] = useState<any>(null)
  const [appContent, setAppContent] = useState({
    appName: "MadeCare India",
    tagline: "Smart Healthcare Made Simple",
    welcomeMessage: "Welcome back! Here's your health summary for today",
    contactPhone1: "+91 7543983040",
    contactPhone2: "+91 6205413147",
    contactEmail1: "mdaimanshafi492@gmail.com",
    contactEmail2: "rajvedant26@gmail.com",
    aboutText: "Empowering health with intelligent technology and compassionate care.",
    footerText: "© 2024 MadeCare India. All rights reserved.",
  })
  const [savedContent, setSavedContent] = useState({})
