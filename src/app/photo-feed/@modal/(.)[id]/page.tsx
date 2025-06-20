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
        <Image
          alt={photo.name}
          src={photo.src}
          className="aspect-square w-full object-cover"
        />

        <div className="bg-white p-4 text-black">
          <h2 className="text-xl font-semibold">{photo.name}</h2>
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
      </Modal>
    
  );
}
