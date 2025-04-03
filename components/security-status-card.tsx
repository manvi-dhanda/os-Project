import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, CheckCircle, AlertCircle } from "lucide-react"

interface SecurityStatusCardProps {
  title: string
  value: number
  status: "good" | "warning" | "critical"
  icon: React.ReactNode
}

export function SecurityStatusCard({ title, value, status, icon }: SecurityStatusCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold">{value}%</div>
          {status === "good" && <CheckCircle className="h-4 w-4 text-green-500" />}
          {status === "warning" && <AlertTriangle className="h-4 w-4 text-amber-500" />}
          {status === "critical" && <AlertCircle className="h-4 w-4 text-red-500" />}
        </div>
        <Progress
          value={value}
          className={`h-2 mt-2 ${
            status === "good" ? "bg-green-100" : status === "warning" ? "bg-amber-100" : "bg-red-100"
          }`}
        />
      </CardContent>
    </Card>
  )
}

