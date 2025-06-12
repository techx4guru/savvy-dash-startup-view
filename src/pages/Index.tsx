
import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { MainDashboard } from "@/components/dashboard/MainDashboard";
import { Analytics } from "@/components/dashboard/Analytics";
import { UserManagement } from "@/components/dashboard/UserManagement";
import { Subscriptions } from "@/components/dashboard/Subscriptions";
import { Notifications } from "@/components/dashboard/Notifications";
import { AdminPanel } from "@/components/dashboard/AdminPanel";
import { Settings } from "@/components/dashboard/Settings";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <MainDashboard />;
      case "analytics":
        return <Analytics />;
      case "users":
        return <UserManagement />;
      case "subscriptions":
        return <Subscriptions />;
      case "notifications":
        return <Notifications />;
      case "admin":
        return <AdminPanel />;
      case "settings":
        return <Settings />;
      default:
        return <MainDashboard />;
    }
  };

  return (
    <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </DashboardLayout>
  );
};

export default Index;
