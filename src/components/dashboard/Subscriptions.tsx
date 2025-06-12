
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, TrendingUp, Users, AlertCircle } from "lucide-react";
import { MetricCard } from "./MetricCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const subscriptions = [
  {
    id: "sub_1",
    customer: "John Doe",
    email: "john.doe@example.com",
    plan: "Enterprise",
    status: "Active",
    amount: "$299/month",
    nextBilling: "2024-07-15",
    startDate: "2024-01-15"
  },
  {
    id: "sub_2",
    customer: "Sarah Wilson", 
    email: "sarah.wilson@example.com",
    plan: "Professional",
    status: "Active",
    amount: "$99/month",
    nextBilling: "2024-07-20",
    startDate: "2024-02-20"
  },
  {
    id: "sub_3",
    customer: "Mike Jones",
    email: "mike.jones@example.com", 
    plan: "Basic",
    status: "Past Due",
    amount: "$29/month",
    nextBilling: "2024-06-10",
    startDate: "2024-03-10"
  },
  {
    id: "sub_4",
    customer: "Emma Davis",
    email: "emma.davis@example.com",
    plan: "Professional", 
    status: "Active",
    amount: "$99/month",
    nextBilling: "2024-07-28",
    startDate: "2024-01-28"
  },
];

export const Subscriptions = () => {
  const metrics = [
    {
      title: "Monthly Recurring Revenue",
      value: "$45,231",
      change: "+12.5%",
      trend: "up" as const,
      icon: CreditCard,
      description: "vs last month"
    },
    {
      title: "Active Subscriptions",
      value: "1,847",
      change: "+8.2%",
      trend: "up" as const,
      icon: Users,
      description: "active subscribers"
    },
    {
      title: "Churn Rate",
      value: "2.4%",
      change: "-0.8%",
      trend: "down" as const,
      icon: AlertCircle,
      description: "monthly churn"
    },
    {
      title: "Average Revenue Per User",
      value: "$24.51",
      change: "+5.3%",
      trend: "up" as const,
      icon: TrendingUp,
      description: "per user"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "success";
      case "Past Due": return "destructive";
      case "Canceled": return "secondary";
      case "Trial": return "warning";
      default: return "secondary";
    }
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case "Enterprise": return "text-purple-600 bg-purple-50";
      case "Professional": return "text-blue-600 bg-blue-50";
      case "Basic": return "text-green-600 bg-green-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Subscriptions & Billing</h1>
        <p className="text-muted-foreground">Monitor your subscription metrics and billing performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="subscriptions">All Subscriptions</TabsTrigger>
          <TabsTrigger value="plans">Plans & Pricing</TabsTrigger>
          <TabsTrigger value="analytics">Revenue Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Plan Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Enterprise</span>
                    <span className="text-sm text-muted-foreground">234 (12.7%)</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '12.7%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Professional</span>
                    <span className="text-sm text-muted-foreground">687 (37.2%)</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '37.2%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Basic</span>
                    <span className="text-sm text-muted-foreground">926 (50.1%)</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '50.1%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Credit Card</span>
                    <span className="text-sm font-medium">89%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">PayPal</span>
                    <span className="text-sm font-medium">8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Bank Transfer</span>
                    <span className="text-sm font-medium">3%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Failed Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-red-600">23</div>
                  <div className="text-sm text-muted-foreground">This month</div>
                  <div className="text-sm text-red-600">Requires attention</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="subscriptions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>All Subscriptions ({subscriptions.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Next Billing</TableHead>
                    <TableHead>Start Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subscriptions.map((sub) => (
                    <TableRow key={sub.id} className="hover:bg-muted/50">
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium">{sub.customer}</div>
                          <div className="text-sm text-muted-foreground">{sub.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getPlanColor(sub.plan)} variant="secondary">
                          {sub.plan}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(sub.status) as any}>
                          {sub.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">{sub.amount}</TableCell>
                      <TableCell>{sub.nextBilling}</TableCell>
                      <TableCell>{sub.startDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="plans" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="relative overflow-hidden">
              <CardHeader>
                <CardTitle className="text-green-600">Basic Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">$29<span className="text-lg text-muted-foreground">/month</span></div>
                <div className="space-y-2">
                  <div className="text-sm">926 active subscribers</div>
                  <div className="text-sm text-muted-foreground">$26,854 MRR</div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-600">Professional Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">$99<span className="text-lg text-muted-foreground">/month</span></div>
                <div className="space-y-2">
                  <div className="text-sm">687 active subscribers</div>
                  <div className="text-sm text-muted-foreground">$68,013 MRR</div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-600">Enterprise Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">$299<span className="text-lg text-muted-foreground">/month</span></div>
                <div className="space-y-2">
                  <div className="text-sm">234 active subscribers</div>
                  <div className="text-sm text-muted-foreground">$69,966 MRR</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">+23.8%</div>
                <p className="text-sm text-muted-foreground">Compared to last quarter</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer Lifetime Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600 mb-2">$2,847</div>
                <p className="text-sm text-muted-foreground">Average across all plans</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
