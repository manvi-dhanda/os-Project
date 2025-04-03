import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Key, Bug, Globe, ArrowRight } from "lucide-react"

export default function AboutPage() {
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
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-[58rem] space-y-12">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About the OS Security Simulator
              </h1>
              <p className="mx-auto max-w-[85%] text-muted-foreground sm:text-xl">
                An interactive educational platform designed to teach operating system security concepts through
                hands-on simulations
              </p>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-bold">Educational Objectives</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Practical Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our simulator provides a hands-on approach to learning complex security concepts, allowing users
                      to experiment in a safe environment without risking real systems.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Comprehensive Coverage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      From access control to network security, our modules cover the full spectrum of operating system
                      security mechanisms and best practices.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Real-world Scenarios</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Simulations are based on real-world security challenges and attack vectors, preparing users for
                      situations they might encounter in professional environments.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Interactive Feedback</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Users receive immediate feedback on their security decisions, helping them understand the
                      consequences of different security configurations and responses.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-bold">Key Features</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Access Control</h3>
                  <p className="text-sm text-muted-foreground">
                    Experiment with DAC, MAC, and RBAC models to understand permission systems and security policies
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Key className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Authentication</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn about different authentication methods and their security implications
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Encryption</h3>
                  <p className="text-sm text-muted-foreground">
                    Understand data protection through hands-on encryption and decryption exercises
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Bug className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Malware Protection</h3>
                  <p className="text-sm text-muted-foreground">
                    Detect and remove various types of malware in a safe, simulated environment
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Firewall & Network</h3>
                  <p className="text-sm text-muted-foreground">
                    Configure firewalls and defend against network-based attacks
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M12 8v4" />
                      <path d="M12 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Security Challenges</h3>
                  <p className="text-sm text-muted-foreground">
                    Test your knowledge with practical security challenges and scenarios
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-bold">Target Audience</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Students</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Computer science and cybersecurity students looking to supplement theoretical knowledge with
                      practical experience
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>IT Professionals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>System administrators and IT staff seeking to improve their security skills and understanding</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Security Enthusiasts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Anyone interested in learning more about operating system security in a hands-on environment</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
              <p className="text-muted-foreground sm:text-lg">
                Begin your journey into operating system security with our interactive simulator
              </p>
              <Button size="lg" asChild>
                <Link href="/dashboard">
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
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

