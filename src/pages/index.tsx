import { Inter } from "next/font/google";
import { VideoGrid } from "@/components/VideoGrid";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div>
    <Header/>
 <VideoGrid/>
   </div>
  );
}
