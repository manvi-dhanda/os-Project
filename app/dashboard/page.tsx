"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Lock, Key, Bug, Globe } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { SecurityStatusCard } from "@/components/security-status-card"
import { RecentActivityCard } from "@/components/recent-activity-card"

export default function DashboardPage() {
  const [securityScore, setSecurityScore] = useState(65)

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Security Dashboard"
        text="Monitor your system security status and access learning modules"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <SecurityStatusCard
          title="Overall Security"
          value={securityScore}
          status={securityScore > 80 ? "good" : securityScore > 50 ? "warning" : "critical"}
          icon={<Shield className="h-4 w-4" />}
        />
        <SecurityStatusCard title="Access Control" value={70} status="warning" icon={<Lock className="h-4 w-4" />} />
        <SecurityStatusCard title="Authentication" value={85} status="good" icon={<Key className="h-4 w-4" />} />
        <SecurityStatusCard title="Encryption" value={60} status="warning" icon={<Shield className="h-4 w-4" />} />
        <SecurityStatusCard
          title="Malware Protection"
          value={40}
          status="critical"
          icon={<Bug className="h-4 w-4" />}
        />
        <SecurityStatusCard
          title="Firewall & Network"
          value={75}
          status="warning"
          icon={<Globe className="h-4 w-4" />}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Security Modules</CardTitle>
            <CardDescription>Continue your learning journey through our interactive modules</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="in-progress">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="all">All Modules</TabsTrigger>
              </TabsList>
              <TabsContent value="in-progress" className="space-y-4 pt-4">
                <ModuleProgressCard
                  title="Access Control"
                  description="Learn about DAC, MAC, and RBAC models"
                  progress={70}
                  icon={<Lock className="h-6 w-6" />}
                  href="/modules/access-control"
                />
                <ModuleProgressCard
                  title="Malware Protection"
                  description="Detect and remove various types of malware"
                  progress={40}
                  icon={<Bug className="h-6 w-6" />}
                  href="/modules/malware-protection"
                />
              </TabsContent>
              <TabsContent value="completed" className="space-y-4 pt-4">
                <ModuleProgressCard
                  title="Authentication"
                  description="Explore authentication methods"
                  progress={100}
                  icon={<Key className="h-6 w-6" />}
                  href="/modules/authentication"
                />
              </TabsContent>
              <TabsContent value="all" className="space-y-4 pt-4">
                <ModuleProgressCard
                  title="Access Control"
                  description="Learn about DAC, MAC, and RBAC models"
                  progress={70}
                  icon={<Lock className="h-6 w-6" />}
                  href="/modules/access-control"
                />
                <ModuleProgressCard
                  title="Authentication"
                  description="Explore authentication methods"
                  progress={100}
                  icon={<Key className="h-6 w-6" />}
                  href="/modules/authentication"
                />
                <ModuleProgressCard
                  title="Encryption"
                  description="Understand encryption techniques"
                  progress={60}
                  icon={<Shield className="h-6 w-6" />}
                  href="/modules/encryption"
                />
                <ModuleProgressCard
                  title="Malware Protection"
                  description="Detect and remove various types of malware"
                  progress={40}
                  icon={<Bug className="h-6 w-6" />}
                  href="/modules/malware-protection"
                />
                <ModuleProgressCard
                  title="Firewall & Network"
                  description="Configure firewalls and defend against attacks"
                  progress={75}
                  icon={<Globe className="h-6 w-6" />}
                  href="/modules/firewall"
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <RecentActivityCard className="col-span-3" />
      </div>
    </DashboardShell>
  )
}

interface ModuleProgressCardProps {
  title: string
  description: string
  progress: number
  icon: React.ReactNode
  href: string
}

function ModuleProgressCard({ title, description, progress, icon, href }: ModuleProgressCardProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="rounded-md bg-primary/10 p-2">{icon}</div>
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex items-center pt-1">
          <Progress value={progress} className="h-2" />
          <span className="ml-2 text-xs text-muted-foreground">{progress}%</span>
        </div>
      </div>
      <Button variant="outline" size="sm" asChild>
        <Link href={href}>Continue</Link>
      </Button>
    </div>
  )
}

