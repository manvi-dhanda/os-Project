"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertCircle, CheckCircle, FileText, Lock } from "lucide-react"

export function AccessControlSimulator() {
  const [activeModel, setActiveModel] = useState<"dac" | "mac" | "rbac">("dac")
  const [securityEvents, setSecurityEvents] = useState<SecurityEvent[]>([
    { type: "info", message: "System initialized with DAC model", timestamp: new Date().toISOString() },
    { type: "info", message: "Default permissions applied to all resources", timestamp: new Date().toISOString() },
  ])

  // DAC state
  const [dacUsers, setDacUsers] = useState([
    { id: 1, name: "Alice", owner: true },
    { id: 2, name: "Bob", owner: false },
    { id: 3, name: "Charlie", owner: false },
  ])

  const [dacResources, setDacResources] = useState([
    { id: 1, name: "Document1.txt", permissions: { read: true, write: true, execute: false } },
    { id: 2, name: "Application.exe", permissions: { read: true, write: false, execute: true } },
    { id: 3, name: "ConfigFile.cfg", permissions: { read: true, write: true, execute: false } },
  ])

  // MAC state
  const [macUsers, setMacUsers] = useState([
    { id: 1, name: "Alice", clearance: "Top Secret" },
    { id: 2, name: "Bob", clearance: "Secret" },
    { id: 3, name: "Charlie", clearance: "Confidential" },
  ])

  const [macResources, setMacResources] = useState([
    { id: 1, name: "Document1.txt", classification: "Secret" },
    { id: 2, name: "Application.exe", classification: "Confidential" },
    { id: 3, name: "ConfigFile.cfg", classification: "Top Secret" },
  ])

  // RBAC state
  const [rbacUsers, setRbacUsers] = useState([
    { id: 1, name: "Alice", roles: ["Admin", "User"] },
    { id: 2, name: "Bob", roles: ["User"] },
    { id: 3, name: "Charlie", roles: ["Guest"] },
  ])

  const [rbacRoles, setRbacRoles] = useState([
    { id: 1, name: "Admin", permissions: ["read", "write", "execute", "modify"] },
    { id: 2, name: "User", permissions: ["read", "write"] },
    { id: 3, name: "Guest", permissions: ["read"] },
  ])

  const [rbacResources, setRbacResources] = useState([
    { id: 1, name: "Document1.txt", requiredPermission: "read" },
    { id: 2, name: "Application.exe", requiredPermission: "execute" },
    { id: 3, name: "ConfigFile.cfg", requiredPermission: "write" },
  ])

  // Access attempt simulation
  const simulateAccess = (model: "dac" | "mac" | "rbac", userId: number, resourceId: number, action: string) => {
    let accessGranted = false
    let message = ""

    if (model === "dac") {
      const user = dacUsers.find((u) => u.id === userId)
      const resource = dacResources.find((r) => r.id === resourceId)

      if (user && resource) {
        if (user.owner || resource.permissions[action as keyof typeof resource.permissions]) {
          accessGranted = true
          message = `${user.name} successfully performed ${action} on ${resource.name}`
        } else {
          message = `Access denied: ${user.name} does not have ${action} permission for ${resource.name}`
        }
      }
    } else if (model === "mac") {
      const user = macUsers.find((u) => u.id === userId)
      const resource = macResources.find((r) => r.id === resourceId)

      if (user && resource) {
        const clearanceLevels = ["Unclassified", "Confidential", "Secret", "Top Secret"]
        const userLevel = clearanceLevels.indexOf(user.clearance)
        const resourceLevel = clearanceLevels.indexOf(resource.classification)

        if (userLevel >= resourceLevel) {
          accessGranted = true
          message = `${user.name} successfully accessed ${resource.name} (${action})`
        } else {
          message = `Access denied: ${user.name}'s clearance (${user.clearance}) is insufficient for ${resource.name} (${resource.classification})`
        }
      }
    } else if (model === "rbac") {
      const user = rbacUsers.find((u) => u.id === userId)
      const resource = rbacResources.find((r) => r.id === resourceId)

      if (user && resource) {
        const userRoles = user.roles
        const hasPermission = userRoles.some((roleName) => {
          const role = rbacRoles.find((r) => r.name === roleName)
          return role?.permissions.includes(resource.requiredPermission)
        })

        if (hasPermission) {
          accessGranted = true
          message = `${user.name} successfully performed ${resource.requiredPermission} on ${resource.name} via role-based permissions`
        } else {
          message = `Access denied: ${user.name}'s roles do not have ${resource.requiredPermission} permission required for ${resource.name}`
        }
      }
    }

    const newEvent: SecurityEvent = {
      type: accessGranted ? "success" : "error",
      message,
      timestamp: new Date().toISOString(),
    }

    setSecurityEvents((prev) => [newEvent, ...prev].slice(0, 10))
    return accessGranted
  }

  const handleModelChange = (value: string) => {
    setActiveModel(value as "dac" | "mac" | "rbac")
    setSecurityEvents((prev) =>
      [
        {
          type: "info",
          message: `Switched to ${value.toUpperCase()} access control model`,
          timestamp: new Date().toISOString(),
        },
        ...prev,
      ].slice(0, 10),
    )
  }

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle>Access Control Simulator</CardTitle>
        <CardDescription>Experiment with different access control models and observe their behavior</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs value={activeModel} onValueChange={handleModelChange}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="dac">
              <Lock className="mr-2 h-4 w-4" />
              DAC
            </TabsTrigger>
            <TabsTrigger value="mac">
              <Lock className="mr-2 h-4 w-4" />
              MAC
            </TabsTrigger>
            <TabsTrigger value="rbac">
              <Lock className="mr-2 h-4 w-4" />
              RBAC
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dac" className="space-y-4 pt-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-medium">Users</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Owner</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dacUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>
                          <Switch
                            checked={user.owner}
                            onCheckedChange={(checked) => {
                              setDacUsers((prev) => prev.map((u) => (u.id === user.id ? { ...u, owner: checked } : u)))
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            {dacResources.map((resource) => (
                              <Button
                                key={resource.id}
                                variant="outline"
                                size="sm"
                                onClick={() => simulateAccess("dac", user.id, resource.id, "read")}
                              >
                                Access {resource.id}
                              </Button>
                            ))}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-medium">Resources</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Resource</TableHead>
                      <TableHead>Read</TableHead>
                      <TableHead>Write</TableHead>
                      <TableHead>Execute</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dacResources.map((resource) => (
                      <TableRow key={resource.id}>
                        <TableCell className="font-medium">{resource.name}</TableCell>
                        <TableCell>
                          <Switch
                            checked={resource.permissions.read}
                            onCheckedChange={(checked) => {
                              setDacResources((prev) =>
                                prev.map((r) =>
                                  r.id === resource.id ? { ...r, permissions: { ...r.permissions, read: checked } } : r,
                                ),
                              )
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <Switch
                            checked={resource.permissions.write}
                            onCheckedChange={(checked) => {
                              setDacResources((prev) =>
                                prev.map((r) =>
                                  r.id === resource.id
                                    ? { ...r, permissions: { ...r.permissions, write: checked } }
                                    : r,
                                ),
                              )
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <Switch
                            checked={resource.permissions.execute}
                            onCheckedChange={(checked) => {
                              setDacResources((prev) =>
                                prev.map((r) =>
                                  r.id === resource.id
                                    ? { ...r, permissions: { ...r.permissions, execute: checked } }
                                    : r,
                                ),
                              )
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mac" className="space-y-4 pt-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-medium">Users</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Clearance</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {macUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>
                          <select
                            className="w-full rounded-md border border-input bg-background px-3 py-1 text-sm"
                            value={user.clearance}
                            onChange={(e) => {
                              setMacUsers((prev) =>
                                prev.map((u) => (u.id === user.id ? { ...u, clearance: e.target.value } : u)),
                              )
                            }}
                          >
                            <option value="Unclassified">Unclassified</option>
                            <option value="Confidential">Confidential</option>
                            <option value="Secret">Secret</option>
                            <option value="Top Secret">Top Secret</option>
                          </select>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            {macResources.map((resource) => (
                              <Button
                                key={resource.id}
                                variant="outline"
                                size="sm"
                                onClick={() => simulateAccess("mac", user.id, resource.id, "access")}
                              >
                                Access {resource.id}
                              </Button>
                            ))}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-medium">Resources</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Resource</TableHead>
                      <TableHead>Classification</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {macResources.map((resource) => (
                      <TableRow key={resource.id}>
                        <TableCell className="font-medium">{resource.name}</TableCell>
                        <TableCell>
                          <select
                            className="w-full rounded-md border border-input bg-background px-3 py-1 text-sm"
                            value={resource.classification}
                            onChange={(e) => {
                              setMacResources((prev) =>
                                prev.map((r) => (r.id === resource.id ? { ...r, classification: e.target.value } : r)),
                              )
                            }}
                          >
                            <option value="Unclassified">Unclassified</option>
                            <option value="Confidential">Confidential</option>
                            <option value="Secret">Secret</option>
                            <option value="Top Secret">Top Secret</option>
                          </select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rbac" className="space-y-4 pt-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <h3 className="mb-2 text-lg font-medium">Users</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Roles</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rbacUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {user.roles.map((role) => (
                              <Badge key={role} variant="outline">
                                {role}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            {rbacResources.map((resource) => (
                              <Button
                                key={resource.id}
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  simulateAccess("rbac", user.id, resource.id, resource.requiredPermission)
                                }
                              >
                                Access {resource.id}
                              </Button>
                            ))}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-medium">Roles</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Role</TableHead>
                      <TableHead>Permissions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rbacRoles.map((role) => (
                      <TableRow key={role.id}>
                        <TableCell className="font-medium">{role.name}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {role.permissions.map((perm) => (
                              <Badge key={perm} variant="outline">
                                {perm}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-medium">Resources</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Resource</TableHead>
                      <TableHead>Required Permission</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rbacResources.map((resource) => (
                      <TableRow key={resource.id}>
                        <TableCell className="font-medium">{resource.name}</TableCell>
                        <TableCell>
                          <select
                            className="w-full rounded-md border border-input bg-background px-3 py-1 text-sm"
                            value={resource.requiredPermission}
                            onChange={(e) => {
                              setRbacResources((prev) =>
                                prev.map((r) =>
                                  r.id === resource.id ? { ...r, requiredPermission: e.target.value } : r,
                                ),
                              )
                            }}
                          >
                            <option value="read">read</option>
                            <option value="write">write</option>
                            <option value="execute">execute</option>
                            <option value="modify">modify</option>
                          </select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <Separator />

        <div>
          <h3 className="mb-2 text-lg font-medium">Security Events Log</h3>
          <div className="h-48 overflow-y-auto rounded-md border p-4">
            {securityEvents.map((event, index) => (
              <div key={index} className="mb-2 flex items-start">
                {event.type === "success" && <CheckCircle className="mr-2 h-4 w-4 text-green-500" />}
                {event.type === "error" && <AlertCircle className="mr-2 h-4 w-4 text-red-500" />}
                {event.type === "info" && <FileText className="mr-2 h-4 w-4 text-blue-500" />}
                <div>
                  <p className="text-sm">{event.message}</p>
                  <p className="text-xs text-muted-foreground">{new Date(event.timestamp).toLocaleTimeString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Reset Simulation</Button>
        <Button>Run Security Audit</Button>
      </CardFooter>
    </Card>
  )
}

interface SecurityEvent {
  type: "success" | "error" | "info"
  message: string
  timestamp: string
}

