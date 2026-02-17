"use client";

import Image from "next/image";
import { useState } from "react";

export function FounderImage() {
  const [showGym, setShowGym] = useState(false);

  return (
    <div
      className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl"
      onMouseEnter={() => setShowGym(true)}
      onMouseLeave={() => setShowGym(false)}
      onTouchStart={() => setShowGym((v) => !v)}
    >
      <Image
        src="/founder.jpg"
        alt="Founder portrait"
        fill
        sizes="(max-width: 768px) 100vw, 400px"
        className="object-cover"
        priority
      />
      <Image
        src="/founder-gym.jpg"
        alt="Founder training in the gym"
        fill
        sizes="(max-width: 768px) 100vw, 400px"
        className={`object-cover transition-opacity duration-500 ${
          showGym ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
