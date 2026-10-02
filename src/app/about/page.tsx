import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { aboutCopy, gallery, reviews, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Grazie Restaurant - a family-run Italian-American bistro in downtown Novato since 1998.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          kicker="Our story"
          title="About Grazie"
          lede={`Family-owned Italian dining on Grant Avenue since ${site.since}.`}
          image={{
            src: "/images/interior.jpg",
            alt: "Interior dining room at Grazie Restaurant",
            width: 1920,
            height: 1080,
            focalX: 0.55,
            focalY: 0.45,
            subject: { l: 0.2, t: 0.2, r: 0.95, b: 0.8 },
            fillFrame: true,
            bleed: true,
          }}
        />

        <section className="site-wrap py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="animate-rise max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/55">
                Since {site.since}
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
                Tradition with a Novato welcome
              </h2>
              <p className="mt-5 text-base leading-relaxed text-foreground/80 md:text-lg">
                {aboutCopy.lead}
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/75 md:text-lg">
                {aboutCopy.body}
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/75 md:text-lg">
                {aboutCopy.visitNovato}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  render={<Link href="/menu" />}
                  size="lg"
                  className="h-11 rounded-md bg-chianti px-5 text-sm font-semibold text-white hover:bg-chianti/90"
                >
                  See the menu
                </Button>
                <Button
                  render={<a href={site.phoneHref} />}
                  variant="outline"
                  size="lg"
                  className="h-11 rounded-md border-border px-5 text-sm font-semibold text-ink hover:bg-muted"
                >
                  Call {site.phone}
                </Button>
              </div>
            </div>
            <div className="relative aspect-[3/4] max-w-md overflow-hidden animate-rise-delay-1 lg:ml-auto">
              <Image
                src="/images/abe.jpg"
                alt="Abe at Grazie Restaurant"
                fill
                sizes="(min-width: 1024px) 28vw, 90vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-border/70 bg-card/60 py-14 md:py-20">
          <div className="site-wrap">
            <div className="max-w-2xl animate-rise">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/55">
                Guests say
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
                Why locals keep coming back
              </h2>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {reviews.map((review) => (
                <blockquote key={review.name}>
                  <p className="font-display text-xl leading-snug text-ink">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <footer className="mt-4 text-sm text-foreground/60">
                    {review.name} · {review.place}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="site-wrap py-14 md:py-20">
          <div className="max-w-2xl animate-rise">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/55">
              Gallery
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
              A look inside
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {gallery.map((shot) => (
              <div
                key={shot.src}
                className="relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <StickyMobileCta />
    </>
  );
}
