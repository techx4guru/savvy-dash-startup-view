
import { 
  BarChart3, 
  Users, 
  CreditCard, 
  Bell, 
  Settings, 
  Home,
  Shield,
  ChevronLeft,
  ChevronRight,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const navigation = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "users", label: "Users", icon: Users },
  { id: "subscriptions", label: "Subscriptions", icon: CreditCard },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "admin", label: "Admin Panel", icon: Shield },
  { id: "settings", label: "Settings", icon: Settings },
];

export const Sidebar = ({ activeTab, setActiveTab, isOpen, setIsOpen }: SidebarProps) => {
  // Close sidebar on mobile when clicking outside or on route change
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && !isOpen) {
        setIsOpen(true);
      }
      if (window.innerWidth < 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, setIsOpen]);

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={cn(
        "fixed left-0 top-0 h-full bg-card border-r border-border transition-all duration-300 z-50",
        "lg:relative lg:translate-x-0",
        isOpen ? "translate-x-0 w-64" : "-translate-x-full lg:translate-x-0 lg:w-16"
      )}>
        <div className="flex items-center justify-between p-4 border-b border-border min-h-[3.5rem] sm:min-h-[4rem]">
          {isOpen && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">SaaS Analytics</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="ml-auto lg:ml-0"
          >
            {isOpen ? (
              <div className="lg:hidden">
                <X className="w-4 h-4" />
              </div>
            ) : null}
            <div className="hidden lg:block">
              {isOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </div>
          </Button>
        </div>
        
        <nav className="p-4 space-y-2">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={cn(
                "w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200",
                "hover:bg-accent hover:scale-105 text-sm font-medium",
                activeTab === item.id 
                  ? "bg-primary text-primary-foreground shadow-lg" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {isOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};
