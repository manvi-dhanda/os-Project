import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, CheckCircle, Clock, Shield, Lock, Key, Bug, Globe } from "lucide-react"

interface RecentActivityCardProps {
  className?: string
}

export function RecentActivityCard({ className }: RecentActivityCardProps) {
  const activities = [
    {
      module: "Authentication",
      action: "Completed MFA Challenge",
      time: "10 minutes ago",
      status: "success",
      icon: <Key className="h-4 w-4" />,
    },
    {
      module: "Firewall",
      action: "Blocked DDoS Attack",
      time: "25 minutes ago",
      status: "success",
      icon: <Globe className="h-4 w-4" />,
    },
    {
      module: "Malware Protection",
      action: "Failed to detect rootkit",
      time: "1 hour ago",
      status: "failure",
      icon: <Bug className="h-4 w-4" />,
    },
    {
      module: "Access Control",
      action: "Updated RBAC permissions",
      time: "2 hours ago",
      status: "success",
      icon: <Lock className="h-4 w-4" />,
    },
    {
      module: "Encryption",
      action: "Key exchange simulation",
      time: "3 hours ago",
      status: "pending",
      icon: <Shield className="h-4 w-4" />,
    },
  ]

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest interactions with the security modules</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center">
              <div className="mr-2 rounded-full bg-primary/10 p-1">{activity.icon}</div>
              <div className="ml-2 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.module}: {activity.action}
                </p>
                <div className="flex items-center pt-1">
                  <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              </div>
              <div className="ml-auto">
                {activity.status === "success" && <CheckCircle className="h-4 w-4 text-green-500" />}
                {activity.status === "failure" && <AlertTriangle className="h-4 w-4 text-red-500" />}
                {activity.status === "pending" && <Clock className="h-4 w-4 text-amber-500" />}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

