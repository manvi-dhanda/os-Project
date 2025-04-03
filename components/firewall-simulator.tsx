"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, ArrowUpDown, CheckCircle, Lock } from "lucide-react"

export function FirewallSimulator() {
  const [firewallEnabled, setFirewallEnabled] = useState(true)
  const [firewallMode, setFirewallMode] = useState<"packet" | "stateful" | "application">("stateful")
  const [rules, setRules] = useState<FirewallRule[]>([
    {
      id: 1,
      name: "Allow HTTP",
      protocol: "TCP",
      port: 80,
      source: "Any",
      destination: "Internal Web Server",
      action: "Allow",
      enabled: true,
    },
    {
      id: 2,
      name: "Allow HTTPS",
      protocol: "TCP",
      port: 443,
      source: "Any",
      destination: "Internal Web Server",
      action: "Allow",
      enabled: true,
    },
    {
      id: 3,
      name: "Block Telnet",
      protocol: "TCP",
      port: 23,
      source: "Any",
      destination: "Any",
      action: "Block",
      enabled: true,
    },
    {
      id: 4,
      name: "Allow SSH",
      protocol: "TCP",
      port: 22,
      source: "Admin Network",
      destination: "Any",
      action: "Allow",
      enabled: true,
    },
    {
      id: 5,
      name: "Block FTP",
      protocol: "TCP",
      port: 21,
      source: "Any",
      destination: "Any",
      action: "Block",
      enabled: true,
    },
  ])

  const [trafficLogs, setTrafficLogs] = useState<TrafficLog[]>([
    {
      id: 1,
      timestamp: new Date().toISOString(),
      source: "192.168.1.100",
      destination: "10.0.0.5",
      protocol: "TCP",
      port: 80,
      action: "Allowed",
      reason: "Matched rule: Allow HTTP",
    },
    {
      id: 2,
      timestamp: new Date().toISOString(),
      source: "192.168.1.105",
      destination: "10.0.0.5",
      protocol: "TCP",
      port: 443,
      action: "Allowed",
      reason: "Matched rule: Allow HTTPS",
    },
    {
      id: 3,
      timestamp: new Date().toISOString(),
      source: "203.0.113.42",
      destination: "10.0.0.10",
      protocol: "TCP",
      port: 23,
      action: "Blocked",
      reason: "Matched rule: Block Telnet",
    },
    {
      id: 4,
      timestamp: new Date().toISOString(),
      source: "10.1.1.5",
      destination: "10.0.0.15",
      protocol: "TCP",
      port: 22,
      action: "Allowed",
      reason: "Matched rule: Allow SSH",
    },
    {
      id: 5,
      timestamp: new Date().toISOString(),
      source: "198.51.100.75",
      destination: "10.0.0.20",
      protocol: "TCP",
      port: 21,
      action: "Blocked",
      reason: "Matched rule: Block FTP",
    },
  ])

  const [attackSimulation, setAttackSimulation] = useState<"none" | "ddos" | "portScan" | "sqlInjection">("none")

  const toggleRule = (id: number) => {
    setRules((prev) => prev.map((rule) => (rule.id === id ? { ...rule, enabled: !rule.enabled } : rule)))
  }

  const moveRule = (id: number, direction: "up" | "down") => {
    const index = rules.findIndex((rule) => rule.id === id)
    if ((direction === "up" && index === 0) || (direction === "down" && index === rules.length - 1)) {
      return
    }

    const newRules = [...rules]
    const targetIndex = direction === "up" ? index - 1 : index + 1
    const temp = newRules[index]
    newRules[index] = newRules[targetIndex]
    newRules[targetIndex] = temp

    setRules(newRules)
  }

  const simulateAttack = (type: "ddos" | "portScan" | "sqlInjection") => {
    setAttackSimulation(type)

    // Generate attack traffic logs
    const newLogs: TrafficLog[] = []

    if (type === "ddos") {
      for (let i = 0; i < 5; i++) {
        newLogs.push({
          id: trafficLogs.length + i + 1,
          timestamp: new Date().toISOString(),
          source: `203.0.113.${Math.floor(Math.random() * 255)}`,
          destination: "10.0.0.5",
          protocol: "UDP",
          port: 80,
          action: firewallEnabled ? "Blocked" : "Allowed",
          reason: firewallEnabled ? "DDoS protection" : "Firewall disabled",
        })
      }
    } else if (type === "portScan") {
      for (let i = 0; i < 5; i++) {
        const port = [22, 23, 80, 443, 3389][i]
        newLogs.push({
          id: trafficLogs.length + i + 1,
          timestamp: new Date().toISOString(),
          source: "198.51.100.42",
          destination: "10.0.0.10",
          protocol: "TCP",
          port,
          action: firewallEnabled ? "Blocked" : "Allowed",
          reason: firewallEnabled ? "Port scan detection" : "Firewall disabled",
        })
      }
    } else if (type === "sqlInjection") {
      newLogs.push({
        id: trafficLogs.length + 1,
        timestamp: new Date().toISOString(),
        source: "192.168.1.200",
        destination: "10.0.0.5",
        protocol: "TCP",
        port: 80,
        action: firewallMode === "application" && firewallEnabled ? "Blocked" : "Allowed",
        reason:
          firewallMode === "application" && firewallEnabled
            ? "Application firewall: SQL injection detected"
            : "Packet/Stateful firewall cannot detect application layer attacks",
      })
    }

    setTrafficLogs((prev) => [...newLogs, ...prev])

    // Reset attack simulation after 5 seconds
    setTimeout(() => {
      setAttackSimulation("none")
    }, 5000)
  }

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle>Firewall Configuration Simulator</CardTitle>
        <CardDescription>Configure and test a virtual firewall to understand network security concepts</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Switch id="firewall-toggle" checked={firewallEnabled} onCheckedChange={setFirewallEnabled} />
              <Label htmlFor="firewall-toggle">Firewall Enabled</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Select
                value={firewallMode}
                onValueChange={(value) => setFirewallMode(value as "packet" | "stateful" | "application")}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select firewall mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="packet">Packet Filtering</SelectItem>
                  <SelectItem value="stateful">Stateful Inspection</SelectItem>
                  <SelectItem value="application">Application Firewall</SelectItem>
                </SelectContent>
              </Select>
              <Label>Firewall Mode</Label>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => simulateAttack("ddos")}
              disabled={attackSimulation !== "none"}
            >
              Simulate DDoS
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => simulateAttack("portScan")}
              disabled={attackSimulation !== "none"}
            >
              Simulate Port Scan
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => simulateAttack("sqlInjection")}
              disabled={attackSimulation !== "none"}
            >
              Simulate SQL Injection
            </Button>
          </div>
        </div>

        {attackSimulation !== "none" && (
          <div
            className={`rounded-md p-4 ${
              attackSimulation === "ddos" ? "bg-red-50" : attackSimulation === "portScan" ? "bg-amber-50" : "bg-blue-50"
            }`}
          >
            <div className="flex items-center">
              <AlertCircle
                className={`mr-2 h-5 w-5 ${
                  attackSimulation === "ddos"
                    ? "text-red-500"
                    : attackSimulation === "portScan"
                      ? "text-amber-500"
                      : "text-blue-500"
                }`}
              />
              <div>
                <p className="font-medium">
                  {attackSimulation === "ddos"
                    ? "DDoS Attack in Progress"
                    : attackSimulation === "portScan"
                      ? "Port Scan Detected"
                      : "SQL Injection Attempt"}
                </p>
                <p className="text-sm">
                  {attackSimulation === "ddos"
                    ? "Multiple connection attempts from different sources"
                    : attackSimulation === "portScan"
                      ? "Sequential port probing from single source"
                      : "Malicious SQL payload detected in HTTP request"}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="rounded-md border">
          <div className="p-4">
            <h3 className="text-lg font-medium">Firewall Rules</h3>
            <p className="text-sm text-muted-foreground">
              Configure rules to control network traffic (rules are processed in order)
            </p>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">Status</TableHead>
                <TableHead>Rule Name</TableHead>
                <TableHead>Protocol</TableHead>
                <TableHead>Port</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Action</TableHead>
                <TableHead className="text-right">Controls</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rules.map((rule) => (
                <TableRow key={rule.id}>
                  <TableCell>
                    <Switch
                      checked={rule.enabled}
                      onCheckedChange={() => toggleRule(rule.id)}
                      aria-label={`Toggle ${rule.name}`}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{rule.name}</TableCell>
                  <TableCell>{rule.protocol}</TableCell>
                  <TableCell>{rule.port}</TableCell>
                  <TableCell>{rule.source}</TableCell>
                  <TableCell>{rule.destination}</TableCell>
                  <TableCell>
                    <Badge variant={rule.action === "Allow" ? "outline" : "destructive"}>{rule.action}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => moveRule(rule.id, "up")}
                        disabled={rules.indexOf(rule) === 0}
                      >
                        <ArrowUpDown className="h-4 w-4 rotate-180" />
                        <span className="sr-only">Move up</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => moveRule(rule.id, "down")}
                        disabled={rules.indexOf(rule) === rules.length - 1}
                      >
                        <ArrowUpDown className="h-4 w-4" />
                        <span className="sr-only">Move down</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex justify-end p-4">
            <Button variant="outline" size="sm">
              Add Rule
            </Button>
          </div>
        </div>

        <div className="rounded-md border">
          <div className="p-4">
            <h3 className="text-lg font-medium">Traffic Logs</h3>
            <p className="text-sm text-muted-foreground">Recent network traffic processed by the firewall</p>
          </div>

          <div className="max-h-[300px] overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Destination</TableHead>
                  <TableHead>Protocol</TableHead>
                  <TableHead>Port</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Reason</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {trafficLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="text-xs">{new Date(log.timestamp).toLocaleTimeString()}</TableCell>
                    <TableCell>{log.source}</TableCell>
                    <TableCell>{log.destination}</TableCell>
                    <TableCell>{log.protocol}</TableCell>
                    <TableCell>{log.port}</TableCell>
                    <TableCell>
                      {log.action === "Allowed" ? (
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Allowed
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-red-50 text-red-700">
                          <Lock className="mr-1 h-3 w-3" />
                          Blocked
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-xs">{log.reason}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Reset Simulation</Button>
        <Button>Generate Traffic</Button>
      </CardFooter>
    </Card>
  )
}

interface FirewallRule {
  id: number
  name: string
  protocol: string
  port: number
  source: string
  destination: string
  action: "Allow" | "Block"
  enabled: boolean
}

interface TrafficLog {
  id: number
  timestamp: string
  source: string
  destination: string
  protocol: string
  port: number
  action: "Allowed" | "Blocked"
  reason: string
}

