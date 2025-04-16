import type { Metadata } from "next"

import { MainDashboard } from "@/components/dashboard/main-dashboard"

export const metadata: Metadata = {
  title: "UniSocial | Your All-in-One Social Platform",
  description: "Connect, share, discuss, talk, and network - all in one place.",
}

export default function DashboardPage() {
  return <MainDashboard />
}
