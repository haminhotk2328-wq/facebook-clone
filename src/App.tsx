import Navbar from "./components/Navbar";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import Feed from "./components/Feed";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-fb-bg">
        <Navbar />
        <div className="flex pt-14">
          <SidebarLeft />
          <Feed />
          <SidebarRight />
        </div>
      </div>
    </TooltipProvider>
  );
}
