
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
  description: string;
}

export const MetricCard = ({ title, value, change, trend, icon: Icon, description }: MetricCardProps) => {
  return (
    <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-200 hover:scale-105 group">
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-y-0 pb-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        <div className="space-y-1">
          <div className="text-2xl font-bold">{value}</div>
          <div className="flex items-center space-x-1">
            <span className={cn(
              "text-xs font-medium",
              trend === "up" ? "text-green-600" : "text-red-600"
            )}>
              {change}
            </span>
            <span className="text-xs text-muted-foreground">{description}</span>
          </div>
        </div>
      </CardContent>
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r transition-opacity duration-200 opacity-70 group-hover:opacity-100",
        trend === "up" ? "from-green-500 to-emerald-500" : "from-red-500 to-rose-500"
      )} />
    </Card>
  );
};
