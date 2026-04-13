import React, { useState } from "react";
import { MoreHorizontal, X, ThumbsUp, MessageSquare, Share2, Globe } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface PostProps {
  author: string;
  time: string;
  content: string;
  image?: string;
  authorSeed: string;
  likes: number;
  comments: number;
  shares: number;
  [key: string]: any;
}

export default function Post({ author, time, content, image, authorSeed, likes: initialLikes, comments, shares }: PostProps) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    if (liked) {
      setLikes(prev => prev - 1);
    } else {
      setLikes(prev => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <Card className="shadow-sm border-none mb-4 overflow-hidden">
      {/* Header */}
      <div className="p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="w-10 h-10">
            <AvatarImage src={`https://picsum.photos/seed/${authorSeed}/200`} />
            <AvatarFallback>{author[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold text-sm hover:underline cursor-pointer">{author}</h4>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span>{time}</span>
              <span>·</span>
              <Globe className="w-3 h-3" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="p-2 hover:bg-fb-bg rounded-full cursor-pointer transition-colors">
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
          </div>
          <div className="p-2 hover:bg-fb-bg rounded-full cursor-pointer transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-3 pb-3 text-sm">
        {content}
      </div>

      {/* Image */}
      {image && (
        <div className="w-full bg-gray-100">
          <img 
            src={image} 
            alt="Post content" 
            className="w-full h-auto max-h-[600px] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      {/* Stats */}
      <div className="px-3 py-2 flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <div className="bg-fb-blue rounded-full p-1">
            <ThumbsUp className="w-2.5 h-2.5 text-white fill-white" />
          </div>
          <span>{likes}</span>
        </div>
        <div className="flex items-center gap-3">
          <span>{comments} bình luận</span>
          <span>{shares} lượt chia sẻ</span>
        </div>
      </div>

      <div className="px-3">
        <Separator />
      </div>

      {/* Actions */}
      <div className="px-1 py-1 flex items-center">
        <ActionButton 
          icon={<ThumbsUp className={`w-5 h-5 ${liked ? 'text-fb-blue fill-fb-blue' : ''}`} />} 
          label="Thích" 
          active={liked}
          onClick={handleLike}
        />
        <ActionButton icon={<MessageSquare className="w-5 h-5" />} label="Bình luận" />
        <ActionButton icon={<Share2 className="w-5 h-5" />} label="Chia sẻ" />
      </div>
    </Card>
  );
}

function ActionButton({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <div 
      className={`flex-1 flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-fb-bg cursor-pointer transition-colors ${active ? 'text-fb-blue' : 'text-gray-500'}`}
      onClick={onClick}
    >
      {icon}
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
}
