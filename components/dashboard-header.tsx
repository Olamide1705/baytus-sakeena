"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GlobalSearch } from "@/components/global-search";
import { Heart, Bell, Settings, LogOut, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function DashboardHeader() {
  const [notifications] = useState("6");

  return (
    <header className="border-b border-border md:bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="flex items-center px-6 py-4 w-full mt-1 md:mt-0">
        {/* Desktop Logo */}
        <div className="flex-shrink-0">
          <Link
            href="/dashboard"
            className="hidden md:flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-base lg:text-xl font-bold text-foreground">
              Baytus-Sakeenah
            </span>
          </Link>
        </div>
        {/* Search Bar */}
        <div className="flex items-center justify-center space-x-4 flex-1 max-w-md ml-10 mr-3 md:ml-0 md:mr-0">
          <GlobalSearch placeholder="Search articles, questions, stories..." />
        </div>

        {/* User Actions */}
        <div className="flex flex-shrink-0 items-center gap-1 lg:gap-4">
          {/* Notifications */}
          <div className="relative">
            <Bell className="cursor-pointer w-5 h-5 lg:w-6 lg:h-6" />
            <span className="absolute -top-1 -right-1 bg-primary rounded-full text-white text-[8px] lg:text-xs px-1">
              {notifications}
            </span>
          </div>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-10 w-10 rounded-full"
              >
                <Avatar className="h-8 w-8 lg:h-10 lg:w-10">
                  <AvatarImage src="/muslim-user-avatar.png" alt="User" />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    AA
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Ahmed Ali</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    ahmed.ali@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
