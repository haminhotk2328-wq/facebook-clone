import { Search, MoreHorizontal, Video } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SidebarRight() {
  const contacts = [
    { name: "Nguyễn Văn A", seed: "user1" },
    { name: "Trần Thị B", seed: "user2" },
    { name: "Lê Văn C", seed: "user3" },
    { name: "Phạm Thị D", seed: "user4" },
    { name: "Hoàng Văn E", seed: "user5" },
    { name: "Đặng Thị F", seed: "user6" },
    { name: "Bùi Văn G", seed: "user7" },
    { name: "Vũ Thị H", seed: "user8" },
    { name: "Lý Văn I", seed: "user9" },
    { name: "Trịnh Thị K", seed: "user10" },
  ];

  return (
    <aside className="hidden lg:block fixed right-0 top-14 bottom-0 w-[280px] xl:w-[360px] p-2 overflow-y-auto">
      <div className="flex items-center justify-between px-2 mb-2">
        <h3 className="text-gray-500 font-semibold">Người liên hệ</h3>
        <div className="flex items-center gap-2">
          <Video className="w-4 h-4 text-gray-500 cursor-pointer hover:bg-gray-200 rounded-full" />
          <Search className="w-4 h-4 text-gray-500 cursor-pointer hover:bg-gray-200 rounded-full" />
          <MoreHorizontal className="w-4 h-4 text-gray-500 cursor-pointer hover:bg-gray-200 rounded-full" />
        </div>
      </div>

      <div className="space-y-1">
        {contacts.map((contact, i) => (
          <ContactItem 
            key={i} 
            name={contact.name} 
            seed={contact.seed} 
            online={i % 3 !== 0} 
          />
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-300">
        <h3 className="px-2 text-gray-500 font-semibold mb-2">Cuộc trò chuyện nhóm</h3>
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors">
          <div className="bg-gray-200 rounded-full p-2">
            <Video className="w-5 h-5" />
          </div>
          <span className="font-medium text-sm">Tạo nhóm mới</span>
        </div>
      </div>
    </aside>
  );
}

function ContactItem({ name, seed, online }: { name: string, seed: string, online: boolean, [key: string]: any }) {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors relative group">
      <div className="relative">
        <Avatar className="w-9 h-9">
          <AvatarImage src={`https://picsum.photos/seed/${seed}/200`} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        {online && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
        )}
      </div>
      <span className="font-medium text-sm">{name}</span>
    </div>
  );
}
