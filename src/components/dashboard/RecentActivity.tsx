
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, UserPlus, CreditCard, AlertTriangle, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    type: "user_signup",
    message: "New user registration",
    user: "john.doe@example.com",
    time: "2 minutes ago",
    icon: UserPlus,
    color: "text-green-500",
    badge: "success"
  },
  {
    id: 2,
    type: "payment_success",
    message: "Payment processed successfully",
    user: "sarah.wilson@example.com",
    time: "5 minutes ago",
    icon: CreditCard,
    color: "text-blue-500",
    badge: "info"
  },
  {
    id: 3,
    type: "payment_failed",
    message: "Payment failed - expired card",
    user: "mike.jones@example.com",
    time: "12 minutes ago",
    icon: AlertTriangle,
    color: "text-red-500",
    badge: "error"
  },
  {
    id: 4,
    type: "subscription_upgrade",
    message: "Upgraded to Premium plan",
    user: "emma.davis@example.com",
    time: "1 hour ago",
    icon: CheckCircle,
    color: "text-purple-500",
    badge: "info"
  },
  {
    id: 5,
    type: "user_signup",
    message: "New user registration",
    user: "alex.brown@example.com",
    time: "2 hours ago",
    icon: UserPlus,
    color: "text-green-500",
    badge: "success"
  },
];

export const RecentActivity = () => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Activity className="w-5 h-5 text-indigo-500" />
          <span>Recent Activity</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
            <div className={`p-2 rounded-full bg-accent/50 ${activity.color}`}>
              <activity.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{activity.message}</p>
                <Badge variant={activity.badge as any} className="text-xs">
                  {activity.type.replace('_', ' ')}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">{activity.user}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
