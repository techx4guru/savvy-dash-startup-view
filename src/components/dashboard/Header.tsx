
import { Bell, Search, User, Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/contexts/ThemeContext";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const Header = ({ sidebarOpen, setSidebarOpen }: HeaderProps) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="h-14 sm:h-16 border-b border-border bg-card/50 backdrop-blur-xl flex items-center justify-between px-3 sm:px-4 lg:px-6">
      <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2"
        >
          <Menu className="w-5 h-5" />
        </Button>
        <div className="relative hidden sm:block flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search..."
            className="pl-10 bg-background/50"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-2 sm:space-x-4">
        <Button variant="ghost" size="sm" className="hidden sm:flex" onClick={toggleTheme}>
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
        
        <Button variant="ghost" size="sm" className="relative p-2">
          <Bell className="w-5 h-5" />
          <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs bg-red-500 p-0">
            3
          </Badge>
        </Button>
        
        <Button variant="ghost" size="sm" className="flex items-center space-x-2 p-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <span className="font-medium hidden sm:block">Admin</span>
        </Button>
      </div>
    </header>
  );
};
