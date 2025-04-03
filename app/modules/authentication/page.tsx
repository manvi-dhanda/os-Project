"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { ArrowLeft, Fingerprint, Key, KeyRound, QrCode, Shield, Smartphone } from "lucide-react"

export default function AuthenticationPage() {
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
        heading="Authentication Module"
        text="Learn about different authentication methods and security practices"
      >
        <Badge variant="outline" className="ml-2">
          100% Complete
        </Badge>
      </DashboardHeader>

      <Tabs defaultValue="password" className="space-y-4">
        <TabsList>
          <TabsTrigger value="password">Password-Based</TabsTrigger>
          <TabsTrigger value="mfa">Multi-Factor</TabsTrigger>
          <TabsTrigger value="biometric">Biometric</TabsTrigger>
          <TabsTrigger value="token">Token-Based</TabsTrigger>
        </TabsList>

        <TabsContent value="password" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Password-Based Authentication</CardTitle>
              <CardDescription>The most common form of authentication using passwords</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Password Security Simulator</h3>
                <p className="text-sm text-muted-foreground">
                  Test different passwords and see their strength and vulnerabilities
                </p>

                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Enter a password" />
                  </div>

                  <div className="space-y-2">
                    <Label>Password Strength</Label>
                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                      <div className="h-full w-3/4 bg-amber-500 rounded-full"></div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Medium strength - Could be cracked in approximately 3 months
                    </p>
                  </div>

                  <div className="rounded-md bg-muted p-4">
                    <h4 className="font-medium">Password Vulnerabilities:</h4>
                    <ul className="list-disc pl-5 pt-2 text-sm">
                      <li>No special characters</li>
                      <li>Contains dictionary word</li>
                      <li>Insufficient length (minimum 12 characters recommended)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline">Test Against Dictionary Attack</Button>
                  <Button>Generate Secure Password</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mfa" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Multi-Factor Authentication (MFA)</CardTitle>
              <CardDescription>Authentication using multiple verification factors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 rounded-md border p-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Key className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Something You Know</h3>
                      <p className="text-sm text-muted-foreground">Password, PIN, or security questions</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 rounded-md border p-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Something You Have</h3>
                      <p className="text-sm text-muted-foreground">Mobile device, security token, or smart card</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 rounded-md border p-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Fingerprint className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Something You Are</h3>
                      <p className="text-sm text-muted-foreground">Fingerprint, facial recognition, or voice pattern</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <h3 className="mb-4 font-medium">MFA Simulation</h3>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" placeholder="user@example.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mfa-password">Password</Label>
                      <Input id="mfa-password" type="password" placeholder="Enter your password" />
                    </div>

                    <Button className="w-full">Next: Verification Code</Button>

                    <div className="rounded-md bg-muted p-4 text-sm">
                      <p>After entering your password, you would receive:</p>
                      <ul className="list-disc pl-5 pt-2">
                        <li>SMS code to your phone</li>
                        <li>Email with a verification link</li>
                        <li>Push notification to your authenticator app</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="biometric" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Biometric Authentication</CardTitle>
              <CardDescription>Authentication using unique physical or behavioral characteristics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 rounded-md border p-4">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Fingerprint className="h-8 w-8" />
                  </div>
                  <h3 className="font-medium">Fingerprint Recognition</h3>
                  <p className="text-center text-sm text-muted-foreground">
                    Uses unique patterns in fingerprints for identification
                  </p>
                  <Badge>FAR: 0.1%</Badge>
                  <Badge variant="outline">FRR: 3%</Badge>
                </div>

                <div className="flex flex-col items-center space-y-2 rounded-md border p-4">
                  <div className="rounded-full bg-primary/10 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="8" r="7" />
                      <circle cx="12" cy="8" r="3" />
                      <line x1="12" y1="15" x2="12" y2="21" />
                      <line x1="9" y1="18" x2="15" y2="18" />
                    </svg>
                  </div>
                  <h3 className="font-medium">Facial Recognition</h3>
                  <p className="text-center text-sm text-muted-foreground">
                    Analyzes facial features for authentication
                  </p>
                  <Badge>FAR: 0.3%</Badge>
                  <Badge variant="outline">FRR: 2.5%</Badge>
                </div>

                <div className="flex flex-col items-center space-y-2 rounded-md border p-4">
                  <div className="rounded-full bg-primary/10 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M8 10h8" />
                      <path d="M12 6v8" />
                    </svg>
                  </div>
                  <h3 className="font-medium">Iris Recognition</h3>
                  <p className="text-center text-sm text-muted-foreground">
                    Uses patterns in the iris for high-security authentication
                  </p>
                  <Badge>FAR: 0.0001%</Badge>
                  <Badge variant="outline">FRR: 0.5%</Badge>
                </div>
              </div>

              <div className="mt-6 rounded-md bg-muted p-4">
                <h3 className="mb-2 font-medium">Biometric Security Considerations</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Biometrics cannot be changed if compromised</li>
                  <li>Storage and protection of biometric data is critical</li>
                  <li>False Accept Rate (FAR) and False Reject Rate (FRR) trade-offs</li>
                  <li>Environmental factors can affect reliability</li>
                  <li>Privacy concerns with biometric data collection</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="token" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Token-Based Authentication</CardTitle>
              <CardDescription>Authentication using digital tokens for secure access</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-lg font-medium">Token Types</h3>

                  <div className="space-y-4">
                    <div className="rounded-md border p-4">
                      <div className="flex items-center space-x-2">
                        <KeyRound className="h-5 w-5" />
                        <h4 className="font-medium">JSON Web Tokens (JWT)</h4>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Compact, self-contained tokens for securely transmitting information between parties
                      </p>
                      <div className="mt-2 rounded-md bg-muted p-2 text-xs font-mono overflow-x-auto">
                        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ
                      </div>
                    </div>

                    <div className="rounded-md border p-4">
                      <div className="flex items-center space-x-2">
                        <QrCode className="h-5 w-5" />
                        <h4 className="font-medium">One-Time Password (OTP)</h4>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Temporary passwords valid for a single login session or transaction
                      </p>
                      <div className="mt-4 flex justify-center">
                        <div className="rounded-md bg-muted p-4 text-center">
                          <div className="text-3xl font-bold">247 891</div>
                          <div className="text-xs text-muted-foreground">Valid for 30 seconds</div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-md border p-4">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-5 w-5" />
                        <h4 className="font-medium">OAuth Tokens</h4>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Tokens that grant limited access to user data without exposing credentials
                      </p>
                      <div className="mt-2 flex items-center justify-center space-x-2">
                        <Button variant="outline" size="sm">
                          Authorize App
                        </Button>
                        <Button variant="outline" size="sm">
                          Revoke Access
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium">Token Security Simulator</h3>

                  <div className="rounded-md border p-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="token-username">Username</Label>
                        <Input id="token-username" placeholder="user@example.com" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="token-password">Password</Label>
                        <Input id="token-password" type="password" placeholder="Enter your password" />
                      </div>

                      <Button className="w-full">Generate Access Token</Button>

                      <div className="rounded-md bg-muted p-4">
                        <h4 className="mb-2 text-sm font-medium">Token Lifecycle</h4>
                        <ol className="list-decimal pl-5 text-sm">
                          <li>User authenticates with credentials</li>
                          <li>Server validates credentials and issues token</li>
                          <li>Client stores token and uses it for requests</li>
                          <li>Server validates token for each request</li>
                          <li>Token expires or is revoked when session ends</li>
                        </ol>
                      </div>

                      <div className="rounded-md bg-muted p-4">
                        <h4 className="mb-2 text-sm font-medium">Security Considerations</h4>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Store tokens securely (HttpOnly cookies)</li>
                          <li>Use HTTPS to prevent token interception</li>
                          <li>Implement token expiration</li>
                          <li>Enable token revocation for compromised tokens</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

