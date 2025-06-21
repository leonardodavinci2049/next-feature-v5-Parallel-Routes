import Link from "next/link";

export default function F1() {
  return (
    <>
      <h1 className="mb-8">F1 page</h1>
      <div className="flex flex-col gap-8">
        <Link className="text-blue-500" href="/f1/f2">F2</Link>
        <Link className="text-blue-500"  href="/f3">F3</Link>
      </div>
    </>
  );
}
