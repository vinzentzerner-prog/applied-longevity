"use client";

import { useEffect, useRef } from "react";

interface TallyEmbedProps {
  formId: string;
  options?: string;
}

export function TallyEmbed({ formId, options = "" }: TallyEmbedProps) {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    // If Tally is already loaded, render the embeds
    if (typeof window !== "undefined" && (window as any).Tally) {
      (window as any).Tally.loadEmbeds();
      return;
    }

    // Otherwise load the script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = () => {
      if ((window as any).Tally) {
        (window as any).Tally.loadEmbeds();
      }
    };
    document.head.appendChild(script);
  }, []);

  return (
    <iframe
      data-tally-src={`https://tally.so/embed/${formId}?${options}`}
      width="100%"
      height="0"
      frameBorder={0}
      title="Apply"
      style={{ border: "none" }}
    />
  );
}
