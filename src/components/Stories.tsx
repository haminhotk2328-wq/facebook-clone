import { Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

export default function Stories() {
  const stories = [
    { name: "Nguyễn Văn A", seed: "story1", profile: "user1" },
    { name: "Trần Thị B", seed: "story2", profile: "user2" },
    { name: "Lê Văn C", seed: "story3", profile: "user3" },
    { name: "Phạm Thị D", seed: "story4", profile: "user4" },
  ];

  return (
    <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
      {/* Create Story */}
      <Card className="min-w-[112px] h-[200px] relative overflow-hidden cursor-pointer group flex-shrink-0 border-none shadow-sm">
        <div className="h-[150px] overflow-hidden">
          <img 
            src="https://picsum.photos/seed/user/200/300" 
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[50px] bg-white flex flex-col items-center justify-end pb-2">
          <div className="absolute -top-5 w-10 h-10 bg-fb-blue rounded-full border-4 border-white flex items-center justify-center text-white">
            <Plus className="w-6 h-6" />
          </div>
          <span className="text-xs font-semibold">Tạo tin</span>
        </div>
      </Card>

      {/* Other Stories */}
      {stories.map((story, i) => (
        <Card key={i} className="min-w-[112px] h-[200px] relative overflow-hidden cursor-pointer group flex-shrink-0 border-none shadow-sm">
          <img 
            src={`https://picsum.photos/seed/${story.seed}/200/300`} 
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute top-3 left-3 w-10 h-10 rounded-full border-4 border-fb-blue overflow-hidden">
            <Avatar className="w-full h-full">
              <AvatarImage src={`https://picsum.photos/seed/${story.profile}/100`} />
              <AvatarFallback>{story.name[0]}</AvatarFallback>
            </Avatar>
          </div>
          <span className="absolute bottom-2 left-3 right-3 text-white text-xs font-semibold line-clamp-2">
            {story.name}
          </span>
        </Card>
      ))}
    </div>
  );
}
