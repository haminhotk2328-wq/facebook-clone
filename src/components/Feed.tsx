import Stories from "./Stories";
import CreatePost from "./CreatePost";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      author: "Nguyễn Văn A",
      time: "2 giờ",
      content: "Hôm nay trời đẹp quá, đi dạo một chút thôi! ☀️ #sunnyday #walking",
      image: "https://picsum.photos/seed/post1/800/600",
      authorSeed: "user1",
      likes: 124,
      comments: 12,
      shares: 5
    },
    {
      author: "ReactJS Community",
      time: "5 giờ",
      content: "React 19 đã chính thức ra mắt với nhiều tính năng mới hấp dẫn. Các bạn đã thử chưa? 🚀",
      image: "https://picsum.photos/seed/post2/800/400",
      authorSeed: "group1",
      likes: 850,
      comments: 45,
      shares: 120
    },
    {
      author: "Lê Văn C",
      time: "1 ngày",
      content: "Vừa hoàn thành xong khóa học lập trình web tại trung tâm. Cảm thấy rất hào hứng với những dự án sắp tới! 💻✨",
      authorSeed: "user3",
      likes: 56,
      comments: 8,
      shares: 2
    }
  ];

  return (
    <main className="flex-1 max-w-[680px] mx-auto pt-4 px-4">
      <Stories />
      <CreatePost />
      {posts.map((post, i) => (
        <Post 
          key={i} 
          author={post.author}
          time={post.time}
          content={post.content}
          image={post.image}
          authorSeed={post.authorSeed}
          likes={post.likes}
          comments={post.comments}
          shares={post.shares}
        />
      ))}
      <div className="h-20" /> {/* Spacer */}
    </main>
  );
}
