import Card from "@/components/Card";

import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div className="flex flex-col items-center justify-center h-full gap-6">
        <div>Notifications</div>
        <div>
          <Link href="/dashboard/archived">Archived</Link>
        </div>
      </div>
    </Card>
  );
}
