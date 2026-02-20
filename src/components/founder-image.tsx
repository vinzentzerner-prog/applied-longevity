import Image from "next/image";

export function FounderImage() {
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
      <Image
        src="/founder.png"
        alt="Vinzent Zerner — founder of Applied Longevity, private longevity advisory"
        fill
        sizes="(max-width: 768px) 100vw, 400px"
        className="object-cover"
        priority
      />
    </div>
  );
}
