
import Card from "@/components/Card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived notifications</div>
      <div>
        <Link href="/dashboard">Default 1</Link>
      </div>
    </Card>
  );
}
