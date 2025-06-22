import Image from "next/image";
import wondersImages, { WonderImage } from "@/app/photo-feed/wonders";
import Modal from "@/components/modal";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;

  return (
    <Modal>
      <div className="flex flex-col">
        <div className="relative my-4">
          <Image
            alt={photo.name}
            src={photo.src}
            width={800}
            height={600}
            className="h-auto max-h-[70vh] w-full object-contain"
            priority
          />
        </div>

        <div className="bg-white p-6 text-black">
          <h2 className="mb-2 text-xl font-semibold">{photo.name}</h2>
          <p className="mb-1 text-gray-600">📸 {photo.photographer}</p>
          <p className="text-gray-600">📍 {photo.location}</p>
        </div>
      </div>
    </Modal>
  );
}
