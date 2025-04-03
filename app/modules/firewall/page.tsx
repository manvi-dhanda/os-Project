"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { AlertCircle, ArrowLeft, Shield } from "lucide-react"
import { FirewallSimulator } from "@/components/firewall-simulator"

export default function FirewallPage() {
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
        heading="Firewall & Network Security Module"
        text="Learn about network security and firewall configuration"
      >
        <Badge variant="outline" className="ml-2">
          75% Complete
        </Badge>
      </DashboardHeader>

      <Tabs defaultValue="simulator" className="space-y-4">
        <TabsList>
          <TabsTrigger value="simulator">Firewall Simulator</TabsTrigger>
          <TabsTrigger value="types">Firewall Types</TabsTrigger>
          <TabsTrigger value="attacks">Network Attacks</TabsTrigger>
          <TabsTrigger value="defense">Defense Strategies</TabsTrigger>
        </TabsList>

        <TabsContent value="simulator" className="space-y-4">
          <FirewallSimulator />
        </TabsContent>

        <TabsContent value="types" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Types of Firewalls</CardTitle>
              <CardDescription>Understanding different firewall technologies and their capabilities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-md border p-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-blue-500" />
                    <h3 className="font-medium">Packet Filtering Firewall</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Examines packets in isolation and filters based on predefined rules using IP addresses, ports, and
                    protocols
                  </p>
                  <div className="mt-2 rounded-md bg-muted p-2 text-xs">
                    <strong>Characteristics:</strong>
                    <ul className="list-disc pl-5 pt-1">
                      <li>Stateless inspection</li>
                      <li>Fast performance</li>
                      <li>Limited application-layer filtering</li>
                      <li>Example: Traditional router ACLs</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <h3 className="font-medium">Stateful Inspection Firewall</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Tracks the state of active connections and makes filtering decisions based on context within the
                    connection
                  </p>
                  <div className="mt-2 rounded-md bg-muted p-2 text-xs">
                    <strong>Characteristics:</strong>
                    <ul className="list-disc pl-5 pt-1">
                      <li>Maintains connection state tables</li>
                      <li>More secure than packet filtering</li>
                      <li>Moderate performance impact</li>
                      <li>Example: Most modern firewalls</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-purple-500" />
                    <h3 className="font-medium">Proxy Firewall</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Acts as an intermediary between internal and external systems, preventing direct connections
                  </p>
                  <div className="mt-2 rounded-md bg-muted p-2 text-xs">
                    <strong>Characteristics:</strong>
                    <ul className="list-disc pl-5 pt-1">
                      <li>Application-level filtering</li>
                      <li>Deep packet inspection</li>
                      <li>Higher performance impact</li>
                      <li>Example: Web proxies, SMTP gateways</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-amber-500" />
                    <h3 className="font-medium">Next-Generation Firewall (NGFW)</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Combines traditional firewall capabilities with advanced features like intrusion prevention,
                    application awareness, and threat intelligence
                  </p>
                  <div className="mt-2 rounded-md bg-muted p-2 text-xs">
                    <strong>Characteristics:</strong>
                    <ul className="list-disc pl-5 pt-1">
                      <li>Application-aware filtering</li>
                      <li>Integrated IPS/IDS</li>
                      <li>User identity awareness</li>
                      <li>Example: Palo Alto, Cisco Firepower</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-md bg-muted p-4">
                <h3 className="mb-2 font-medium">Firewall Deployment Models</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <h4 className="text-sm font-medium">Network Firewall</h4>
                    <p className="text-xs text-muted-foreground">
                      Deployed at network perimeter to filter traffic between internal and external networks
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium">Host-based Firewall</h4>
                    <p className="text-xs text-muted-foreground">
                      Installed on individual devices to protect specific hosts
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium">Cloud Firewall</h4>
                    <p className="text-xs text-muted-foreground">Virtual firewalls deployed in cloud environments</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attacks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Network Attack Vectors</CardTitle>
              <CardDescription>Common network-based attacks and their characteristics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-md border p-4">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <h3 className="font-medium">Distributed Denial of Service (DDoS)</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Overwhelms network resources with traffic from multiple sources, making services unavailable
                  </p>
                  <div className="mt-2 rounded-md bg-muted p-2 text-xs">
                    <strong>Types:</strong>
                    <ul className="list-disc pl-5 pt-1">
                      <li>Volume-based attacks (UDP floods)</li>
                      <li>Protocol attacks (SYN floods)</li>
                      <li>Application layer attacks (HTTP floods)</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <h3 className="font-medium">Man-in-the-Middle (MitM)</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Attacker secretly relays and possibly alters communication between two parties
                  </p>
                  <div className="mt-2 rounded-md bg-muted p-2 text-xs">
                    <strong>Techniques:</strong>
                    <ul className="list-disc pl-5 pt-1">
                      <li>ARP poisoning</li>
                      <li>DNS spoofing</li>
                      <li>SSL stripping</li>
                      <li>Rogue Wi-Fi access points</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <h3 className="font-medium">SQL Injection</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Inserting malicious SQL code into queries to manipulate databases
                  </p>
                  <div className="mt-2 rounded-md bg-muted p-2 text-xs">
                    <strong>Impact:</strong>
                    <ul className="list-disc pl-5 pt-1">
                      <li>Data theft</li>
                      <li>Authentication bypass</li>
                      <li>Data manipulation</li>
                      <li>Remote command execution</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <h3 className="font-medium">Cross-Site Scripting (XSS)</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Injecting malicious scripts into web pages viewed by other users
                  </p>
                  <div className="mt-2 rounded-md bg-muted p-2 text-xs">
                    <strong>Types:</strong>
                    <ul className="list-disc pl-5 pt-1">
                      <li>Stored XSS</li>
                      <li>Reflected XSS</li>
                      <li>DOM-based XSS</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-md bg-muted p-4">
                <h3 className="mb-2 font-medium">Attack Indicators</h3>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-medium">Network-level Indicators</h4>
                    <ul className="list-disc pl-5 pt-1 text-xs">
                      <li>Unusual traffic patterns or volumes</li>
                      <li>Unexpected port scanning activity</li>
                      <li>Suspicious protocol behaviors</li>
                      <li>Unusual geographic source of traffic</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium">System-level Indicators</h4>
                    <ul className="list-disc pl-5 pt-1 text-xs">
                      <li>Unexpected system slowdowns</li>
                      <li>Unusual process activity</li>
                      <li>Unexpected outbound connections</li>
                      <li>Authentication failures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="defense" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Network Defense Strategies</CardTitle>
              <CardDescription>Techniques and best practices for protecting network infrastructure</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-md border p-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <h3 className="font-medium">Defense in Depth</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Implementing multiple layers of security controls throughout the network
                  </p>
                  <div className="mt-2 rounded-md bg-muted p-2 text-xs">
                    <strong>Components:</strong>
                    <ul className="list-disc pl-5 pt-1">
                      <li>Perimeter security (firewalls, IDS/IPS)</li>
                      <li>Network segmentation</li>
                      <li>Host-based security</li>
                      <li>Data protection</li>
                      <li>User security awareness</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <h3 className="font-medium">Network Segmentation</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Dividing the network into isolated segments to limit lateral movement
                  </p>
                  <div className="mt-2 rounded-md bg-muted p-2 text-xs">
                    <strong>Implementation:</strong>
                    <ul className="list-disc pl-5 pt-1">
                      <li>VLANs and subnetting</li>
                      <li>Internal firewalls</li>
                      <li>Zero Trust architecture</li>
                      <li>Micro-segmentation</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <h3 className="font-medium">Intrusion Detection/Prevention</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Monitoring network traffic for suspicious activity and taking action
                  </p>
                  <div className="mt-2 rounded-md bg-muted p-2 text-xs">
                    <strong>Types:</strong>
                    <ul className="list-disc pl-5 pt-1">
                      <li>Signature-based detection</li>
                      <li>Anomaly-based detection</li>
                      <li>Heuristic analysis</li>
                      <li>Network behavior analysis</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <h3 className="font-medium">Secure Communication</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Protecting data in transit through encryption and secure protocols
                  </p>
                  <div className="mt-2 rounded-md bg-muted p-2 text-xs">
                    <strong>Technologies:</strong>
                    <ul className="list-disc pl-5 pt-1">
                      <li>TLS/SSL for web traffic</li>
                      <li>VPNs for remote access</li>
                      <li>SSH for administrative access</li>
                      <li>DNSSEC for DNS security</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-md bg-muted p-4">
                <h3 className="mb-2 font-medium">Security Best Practices</h3>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-medium">Configuration Management</h4>
                    <ul className="list-disc pl-5 pt-1 text-xs">
                      <li>Maintain secure baseline configurations</li>
                      <li>Regular security patching</li>
                      <li>Disable unnecessary services</li>
                      <li>Implement least privilege principle</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium">Monitoring and Response</h4>
                    <ul className="list-disc pl-5 pt-1 text-xs">
                      <li>Centralized log management</li>
                      <li>Security information and event management (SIEM)</li>
                      <li>Regular security assessments</li>
                      <li>Incident response planning</li>
                    </ul>
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

