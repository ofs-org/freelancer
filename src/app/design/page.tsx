import { ActivityIcon } from "@/components/icons/activity";
import { ArchiveIcon } from "@/components/icons/archive";
import { BotMessageSquareIcon } from "@/components/icons/bot-message-square";
import { MenuIcon } from "@/components/icons/menu";
import { MessageCircleMoreIcon } from "@/components/icons/message-circle-more";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function DesignPage() {
  return (
    <main className="min-h-screen p-8 md:p-16 space-y-16">
      {/* ICONS */}
      <section>
        <h2 className="font-heading text-2xl font-semibold mb-4">Icons</h2>
        <Card>
          <CardTitle>Animated Icons</CardTitle>
          <CardContent className="flex gap-4 flex-wrap">
            <ArchiveIcon />
            <MenuIcon />
            <ActivityIcon />
            <BotMessageSquareIcon />
            <MessageCircleMoreIcon />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
