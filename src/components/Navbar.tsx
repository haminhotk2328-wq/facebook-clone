import React from "react";
import { Search, Home, Users, Store, Gamepad2, Menu, Bell, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-4 shadow-sm">
      {/* Left */}
      <div className="flex items-center gap-2 flex-1">
        <div className="w-10 h-10 bg-fb-blue rounded-full flex items-center justify-center text-white font-bold text-2xl cursor-pointer">
          f
        </div>
        <div className="relative hidden md:block max-w-[240px] w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <Input 
            placeholder="Tìm kiếm trên Facebook" 
            className="pl-10 bg-fb-bg border-none rounded-full h-10 focus-visible:ring-0"
          />
        </div>
      </div>

      {/* Center */}
      <div className="hidden lg:flex items-center justify-center flex-1 h-full gap-2">
        <NavIcon icon={<Home />} active label="Trang chủ" />
        <NavIcon icon={<Users />} label="Bạn bè" />
        <NavIcon icon={<Store />} label="Marketplace" />
        <NavIcon icon={<Gamepad2 />} label="Trò chơi" />
      </div>

      {/* Right */}
      <div className="flex items-center justify-end gap-2 flex-1">
        <div className="hidden xl:flex items-center gap-1 mr-2 hover:bg-fb-bg p-1 rounded-full cursor-pointer transition-colors">
          <Avatar className="w-7 h-7">
            <AvatarImage src="https://picsum.photos/seed/user/200" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <span className="text-sm font-semibold px-1">User</span>
        </div>
        
        <CircleButton icon={<Menu />} label="Menu" />
        <CircleButton icon={<MessageCircle />} label="Messenger" />
        <CircleButton icon={<Bell />} label="Thông báo" />
        <CircleButton icon={<User />} label="Tài khoản" />
      </div>
    </nav>
  );
}

function NavIcon({ icon, active = false, label }: { icon: React.ReactNode, active?: boolean, label: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={`relative flex items-center justify-center w-24 h-full cursor-pointer group`}>
            <div className={`w-full h-full flex items-center justify-center rounded-lg transition-colors ${active ? 'text-fb-blue' : 'text-gray-500 hover:bg-fb-bg'}`}>
              {icon}
            </div>
            {active && <div className="absolute bottom-0 left-0 right-0 h-1 bg-fb-blue rounded-t-full" />}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function CircleButton({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="bg-fb-bg hover:bg-gray-200 rounded-full w-10 h-10">
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
