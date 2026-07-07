import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { getTestimonials } from "@/lib/content";

export const metadata = {
  title: "Public engagement | NDRS",
};

export default function EngagementPage() {
  const testimonials = getTestimonials();

  return (
    <>
      <Header />
      <Breadcrumb
        trail={[{ label: "NDRS.ca", href: "/" }, { label: "Public engagement" }]}
      />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-8 md:px-8">
          <h1 className="mb-1 border-b-4 border-ndrs-accent pb-3 font-heading text-3xl font-bold text-foreground">
            Public engagement
          </h1>
          <p className="mt-4 text-sm text-gray-700">
            Share Your Voice. 12,847 submissions received; 6 advanced to
            shortlist consideration.
          </p>

          <h2 className="mt-8 mb-4 font-heading text-xl font-bold">
            What Canadians Are Saying
          </h2>
          <p className="mb-4 text-xs italic text-gray-500">
            Testimonials are selected to reflect the diversity of views
            received, from among views received that reflect the Program.
          </p>
          <ul className="space-y-4">
            {testimonials.map((t) => (
              <li
                key={t.slug}
                className="border-l-4 border-ndrs-grey bg-ndrs-grey px-4 py-3"
              >
                <p className="text-sm italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-2 text-xs text-gray-600">
                  — {t.attribution}, {t.location}
                  <span className="ml-2 text-gray-400">({t.status})</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
