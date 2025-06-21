
import Card from "@/components/Card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div className="flex flex-col items-center justify-center h-full gap-6">

      <div>Archived notifications</div>
      <div>
        <Link href="/dashboard">Default 2</Link>
      </div>
      </div>
    </Card>
  );
}
