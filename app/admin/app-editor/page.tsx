"use client";

import { useState } from "react";

export default function Page() {
  const [session, setSession] = useState<any>(null);

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
  });

  const [savedContent, setSavedContent] = useState({});

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{appContent.appName}</h1>
      <p className="text-lg">{appContent.tagline}</p>
      <p className="mt-2">{appContent.welcomeMessage}</p>
      <footer className="mt-4 text-sm text-gray-500">{appContent.footerText}</footer>
    </div>
  );
}
