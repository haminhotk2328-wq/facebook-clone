import React from "react";
import { Video, Image, Smile } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function CreatePost() {
  return (
    <Card className="p-3 shadow-sm border-none mb-4">
      <div className="flex items-center gap-2 mb-3">
        <Avatar className="w-10 h-10">
          <AvatarImage src="https://picsum.photos/seed/user/200" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="flex-1 bg-fb-bg hover:bg-gray-200 rounded-full h-10 flex items-center px-4 cursor-pointer text-gray-500 transition-colors">
          User ơi, bạn đang nghĩ gì thế?
        </div>
      </div>
      
      <Separator className="mb-1" />
      
      <div className="flex items-center">
        <PostAction icon={<Video className="text-red-500" />} label="Video trực tiếp" />
        <PostAction icon={<Image className="text-green-500" />} label="Ảnh/video" />
        <PostAction icon={<Smile className="text-yellow-500" />} label="Cảm xúc/hoạt động" />
      </div>
    </Card>
  );
}

function PostAction({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex-1 flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-fb-bg cursor-pointer transition-colors">
      {icon}
      <span className="text-sm font-semibold text-gray-500">{label}</span>
    </div>
  );
}
