import React from "react";
import { Users, Bookmark, Clock, ChevronDown, User, Flag, Calendar, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SidebarLeft() {
  return (
    <aside className="hidden xl:block fixed left-0 top-14 bottom-0 w-[360px] p-2 overflow-y-auto hover:scrollbar-thin">
      <div className="space-y-1">
        <SidebarItem icon={<Avatar className="w-9 h-9"><AvatarImage src="https://picsum.photos/seed/user/200" /><AvatarFallback>U</AvatarFallback></Avatar>} label="User Name" />
        <SidebarItem icon={<Users className="text-blue-500 w-9 h-9 p-1.5" />} label="Bạn bè" />
        <SidebarItem icon={<Clock className="text-blue-400 w-9 h-9 p-1.5" />} label="Kỷ niệm" />
        <SidebarItem icon={<Bookmark className="text-purple-500 w-9 h-9 p-1.5" />} label="Đã lưu" />
        <SidebarItem icon={<Flag className="text-orange-500 w-9 h-9 p-1.5" />} label="Trang" />
        <SidebarItem icon={<Calendar className="text-red-500 w-9 h-9 p-1.5" />} label="Sự kiện" />
        <SidebarItem icon={<Star className="text-yellow-500 w-9 h-9 p-1.5" />} label="Yêu thích" />
        <SidebarItem icon={<div className="bg-gray-200 rounded-full p-1.5"><ChevronDown className="w-6 h-6" /></div>} label="Xem thêm" />
      </div>

      <div className="mt-4 pt-4 border-t border-gray-300">
        <h3 className="px-2 text-gray-500 font-semibold mb-2">Lối tắt của bạn</h3>
        <SidebarItem icon={<Avatar className="w-9 h-9 rounded-lg"><AvatarImage src="https://picsum.photos/seed/group1/200" /><AvatarFallback>G</AvatarFallback></Avatar>} label="Cộng đồng ReactJS" />
        <SidebarItem icon={<Avatar className="w-9 h-9 rounded-lg"><AvatarImage src="https://picsum.photos/seed/group2/200" /><AvatarFallback>G</AvatarFallback></Avatar>} label="Học lập trình mỗi ngày" />
        <SidebarItem icon={<Avatar className="w-9 h-9 rounded-lg"><AvatarImage src="https://picsum.photos/seed/group3/200" /><AvatarFallback>G</AvatarFallback></Avatar>} label="Góc Designer" />
      </div>
      
      <div className="mt-8 px-2 text-xs text-gray-500 flex flex-wrap gap-x-2 gap-y-1">
        <span>Quyền riêng tư</span> · <span>Điều khoản</span> · <span>Quảng cáo</span> · <span>Lựa chọn quảng cáo</span> · <span>Cookie</span> · <span>Xem thêm</span> · <span>Meta © 2026</span>
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors group">
      <div className="flex-shrink-0">
        {icon}
      </div>
      <span className="font-medium text-sm">{label}</span>
    </div>
  );
}
