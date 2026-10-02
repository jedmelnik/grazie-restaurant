import { Phone, MapPin } from "lucide-react";
import { site } from "@/lib/site";

/** Mobile sticky CTA - call + directions without fighting the hero. */
export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-[#f3efe8]/95 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))]">
        <a
          href={site.phoneHref}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-chianti text-sm font-semibold text-white"
        >
          <Phone className="size-4" aria-hidden />
          Call
        </a>
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ink text-sm font-semibold text-white"
        >
          <MapPin className="size-4" aria-hidden />
          Directions
        </a>
      </div>
    </div>
  );
}
