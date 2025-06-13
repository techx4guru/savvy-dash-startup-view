
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { ThemeProvider } from "@/contexts/ThemeContext";

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const DashboardLayout = ({ children, activeTab, setActiveTab }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Start closed on mobile

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background flex">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
        />
        <div className="flex-1 flex flex-col min-w-0">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="flex-1 p-3 sm:p-4 lg:p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};
