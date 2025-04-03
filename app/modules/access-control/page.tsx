"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Lock, Users, Database, ArrowLeft } from "lucide-react"
import { AccessControlSimulator } from "@/components/access-control-simulator"

export default function AccessControlPage() {
  return (
    <DashboardShell>
      <div className="flex items-center">
        <Button variant="ghost" size="sm" asChild className="mr-2">
          <Link href="/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </div>

      <DashboardHeader
        heading="Access Control Module"
        text="Learn about different access control models and security policies"
      >
        <Badge variant="outline" className="ml-2">
          70% Complete
        </Badge>
      </DashboardHeader>

      <Tabs defaultValue="simulator" className="space-y-4">
        <TabsList>
          <TabsTrigger value="simulator">Interactive Simulator</TabsTrigger>
          <TabsTrigger value="theory">Theory & Concepts</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
        </TabsList>

        <TabsContent value="simulator" className="space-y-4">
          <AccessControlSimulator />
        </TabsContent>

        <TabsContent value="theory" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Access Control Models</CardTitle>
              <CardDescription>
                Understanding the fundamental access control models in operating systems
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Discretionary Access Control (DAC)</h3>
                <p>
                  DAC is an access control policy determined by the owner of an object. The owner decides who is allowed
                  to access the object and what privileges they have.
                </p>
                <div className="rounded-md bg-muted p-4">
                  <h4 className="font-medium">Key Characteristics:</h4>
                  <ul className="list-disc pl-5 pt-2">
                    <li>Owner-controlled access rights</li>
                    <li>Access Control Lists (ACLs)</li>
                    <li>Flexible but potentially less secure</li>
                    <li>Examples: Traditional Unix file permissions</li>
                  </ul>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Mandatory Access Control (MAC)</h3>
                <p>
                  MAC is an access control policy determined by the system, not the owner. Access is based on security
                  labels assigned to users and objects.
                </p>
                <div className="rounded-md bg-muted p-4">
                  <h4 className="font-medium">Key Characteristics:</h4>
                  <ul className="list-disc pl-5 pt-2">
                    <li>System-enforced access control</li>
                    <li>Security labels and clearance levels</li>
                    <li>Strict and more secure than DAC</li>
                    <li>Examples: SELinux, AppArmor</li>
                  </ul>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Role-Based Access Control (RBAC)</h3>
                <p>
                  RBAC assigns permissions to specific roles, and users are assigned to appropriate roles. Access rights
                  are based on roles users have as part of an organization.
                </p>
                <div className="rounded-md bg-muted p-4">
                  <h4 className="font-medium">Key Characteristics:</h4>
                  <ul className="list-disc pl-5 pt-2">
                    <li>Role-based permissions</li>
                    <li>Simplified administration</li>
                    <li>Principle of least privilege</li>
                    <li>Examples: Windows Active Directory, most enterprise systems</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="challenges" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Access Control Challenges</CardTitle>
              <CardDescription>Test your knowledge with these practical challenges</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Lock className="h-5 w-5 text-amber-500" />
                    <div>
                      <h3 className="font-medium">Privilege Escalation Detection</h3>
                      <p className="text-sm text-muted-foreground">
                        Identify and fix privilege escalation vulnerabilities in a simulated system
                      </p>
                    </div>
                  </div>
                  <Badge>Intermediate</Badge>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button>Start Challenge</Button>
                </div>
              </div>

              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-green-500" />
                    <div>
                      <h3 className="font-medium">RBAC Configuration</h3>
                      <p className="text-sm text-muted-foreground">
                        Design and implement a secure RBAC system for a virtual organization
                      </p>
                    </div>
                  </div>
                  <Badge>Beginner</Badge>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button>Start Challenge</Button>
                </div>
              </div>

              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Database className="h-5 w-5 text-red-500" />
                    <div>
                      <h3 className="font-medium">MAC Policy Enforcement</h3>
                      <p className="text-sm text-muted-foreground">
                        Configure and test a Mandatory Access Control policy for critical system resources
                      </p>
                    </div>
                  </div>
                  <Badge>Advanced</Badge>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button>Start Challenge</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

