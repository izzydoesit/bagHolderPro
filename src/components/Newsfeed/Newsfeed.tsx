import { Card} from "@/components/ui/Card";
import { CardContent } from "@/components/ui/CardContent";

const mockNews = [
  { title: "Apple announces new iPhone lineup", time: "09:10 AM" },
  { title: "Federal Reserve updates interest rates policy", time: "09:20 AM" },
  { title: "Tesla reports record quarterly deliveries", time: "09:25 AM" },
  { title: "Nvidia beats earnings expectations", time: "09:30 AM" },
];

export default function NewsFeed() {
  return (
    <Card className="bg-zinc-900">
      <CardContent className="space-y-2 overflow-y-auto max-h-[300px]">
        <h2 className="text-lg font-semibold text-white mb-2">📰 News Feed</h2>
        {mockNews.map((news, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-white text-sm">{news.title}</span>
            <span className="text-xs text-gray-400">{news.time}</span>
            <div className="border-b border-zinc-700 my-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
