"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  BookOpen,
  MessageCircle,
  Users,
  Heart,
  Star,
  TrendingUp,
  Calendar,
  HelpCircle,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const sidebarItems = [
  { title: "Dashboard", href: "/dashboard", icon: Home },
  {
    title: "Content Hub",
    href: "/dashboard/content",
    icon: BookOpen,
    badge: "New",
  },
  {
    title: "Q&A Forum",
    href: "/dashboard/qa",
    icon: MessageCircle,
    badge: "5",
  },
  { title: "Stories", href: "/dashboard/stories", icon: Heart },
  { title: "Mentorship", href: "/dashboard/mentorship", icon: Users },
  { title: "My Favorites", href: "/dashboard/favorites", icon: Star },
  { title: "Trending", href: "/dashboard/trending", icon: TrendingUp },
  { title: "Events", href: "/dashboard/events", icon: Calendar },
  { title: "Help & Support", href: "/dashboard/help", icon: HelpCircle },
];

function SidebarContent({ pathname }: { pathname: string }) {
  return (
    <div className="flex flex-col flex-grow px-4">
      <nav className="flex-1 space-y-2 mt-4">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start h-10",
                  isActive && "bg-primary/10 text-primary hover:bg-primary/20"
                )}
              >
                <item.icon className="mr-3 h-4 w-4" />
                <span className="flex-1 text-left">{item.title}</span>
                {item.badge && (
                  <Badge
                    variant={item.badge === "New" ? "default" : "secondary"}
                    className="ml-auto text-xs"
                  >
                    {item.badge}
                  </Badge>
                )}
              </Button>
            </Link>
          );
        })}
      </nav>

      {/* Community Stats */}
      <div className="mt-8 p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
        <h3 className="text-sm font-semibold text-foreground mb-3">
          Community Impact
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Couples Helped</span>
            <span className="font-medium text-foreground">1,247</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Success Stories</span>
            <span className="font-medium text-foreground">523</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Active Mentors</span>
            <span className="font-medium text-foreground">89</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Trigger */}
      <div className="fixed top-5.5 left-5 z-50 md:hidden">
        <Button
          size="icon"
          onClick={() => setOpen(true)}
          className="text-foreground text-white"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Sidebar (Sheet) */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="p-4 border-b mt-5">
            <SheetTitle>
              {/* Mobile Logo */}
              <Link
                href="/dashboard"
                className="md:hidden flex items-center space-x-2"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-base lg:text-xl font-bold text-foreground">
                  Baytus-Sakeenah
                </span>
              </Link>
            </SheetTitle>
          </SheetHeader>

          <SidebarContent pathname={pathname} />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 bg-muted/30 border-r border-border">
          <SidebarContent pathname={pathname} />
        </div>
      </div>
    </>
  );
}
