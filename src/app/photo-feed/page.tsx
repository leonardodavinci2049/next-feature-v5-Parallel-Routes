import Link from "next/link";
import wonders from "./wonders";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <h1 className="my-4 text-center text-3xl font-bold">
        Novas Maravilhas do Mundo
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {wonders.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`} className="group block">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                alt={name}
                src={src}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                placeholder="blur"
              />
            </div>
            <p className="mt-2 text-center text-sm font-medium text-black">{name}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
