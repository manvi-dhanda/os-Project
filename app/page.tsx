import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Key, Bug, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "OS Security Simulator",
  description: "An interactive educational simulator for operating system security concepts",
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-6 w-6" />
              <span className="font-bold">OS Security Simulator</span>
            </Link>
          </div>
          <nav className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/about">About</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">OS Security Simulator</h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              An interactive educational platform for learning operating system security concepts through hands-on
              simulations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/dashboard">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Security Modules</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Explore different aspects of operating system security through our interactive modules
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <ModuleCard
              title="Access Control"
              description="Learn about DAC, MAC, and RBAC models through interactive simulations"
              icon={<Lock className="h-10 w-10 text-primary" />}
              href="/modules/access-control"
            />
            <ModuleCard
              title="Authentication"
              description="Explore password-based, MFA, biometric, and token-based authentication"
              icon={<Key className="h-10 w-10 text-primary" />}
              href="/modules/authentication"
            />
            <ModuleCard
              title="Encryption"
              description="Understand symmetric and asymmetric encryption through hands-on exercises"
              icon={<Shield className="h-10 w-10 text-primary" />}
              href="/modules/encryption"
            />
            <ModuleCard
              title="Malware Protection"
              description="Detect and remove various types of malware in a safe environment"
              icon={<Bug className="h-10 w-10 text-primary" />}
              href="/modules/malware-protection"
            />
            <ModuleCard
              title="Firewall & Network"
              description="Configure firewalls and defend against network-based attacks"
              icon={<Globe className="h-10 w-10 text-primary" />}
              href="/modules/firewall"
            />
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built for educational purposes. All simulations run in a safe, sandboxed environment.
          </p>
        </div>
      </footer>
    </div>
  )
}

interface ModuleCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}

function ModuleCard({ title, description, icon, href }: ModuleCardProps) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <div className="flex items-center justify-center pb-2">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={href}>Start Module</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

