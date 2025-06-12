
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  UserMinus,
  Activity,
  CreditCard
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "./MetricCard";
import { RevenueChart } from "./charts/RevenueChart";
import { UserGrowthChart } from "./charts/UserGrowthChart";
import { ChurnRateChart } from "./charts/ChurnRateChart";
import { RecentActivity } from "./RecentActivity";

export const MainDashboard = () => {
  const metrics = [
    {
      title: "Monthly Recurring Revenue",
      value: "$45,231",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
      description: "vs last month"
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+15.3%",
      trend: "up",
      icon: Users,
      description: "vs last month"
    },
    {
      title: "Churn Rate",
      value: "2.4%",
      change: "-0.8%",
      trend: "down",
      icon: UserMinus,
      description: "vs last month"
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+0.5%",
      trend: "up",
      icon: TrendingUp,
      description: "vs last month"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your business.</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-blue-500" />
              <span>Revenue Trend</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RevenueChart />
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-green-500" />
              <span>User Growth</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <UserGrowthChart />
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <UserMinus className="w-5 h-5 text-orange-500" />
              <span>Churn Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChurnRateChart />
          </CardContent>
        </Card>

        <RecentActivity />
      </div>
    </div>
  );
};
