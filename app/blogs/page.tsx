import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";

export default function Blogs() {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-background text-foreground">
      <Nav />

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-xl w-full">
          <div className="rounded-2xl border bg-card text-card-foreground shadow-lg p-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border text-sm font-medium opacity-80">
              🚧 Under Construction
            </div>

            {/* Title */}
            <h1 className="text-4xl font-extrabold tracking-tight mb-3">
              Blogs
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg opacity-80 mb-6">
              We’re building something useful here.
              <span className="font-semibold"> Kaam chalu hai.</span>
            </h2>

            {/* Description */}
            <p className="text-sm opacity-70 mb-8 leading-relaxed">
              My In-depth guides and product write-ups are on
              the way. Check back soon.
            </p>

            {/* CTA */}
            <Button className="px-6 py-2.5 rounded-xl border hover:bg-accent hover:text-accent-foreground transition">
              Coming Soon
            </Button>
          </div>

          <p className="text-center text-xs opacity-60 mt-6">
            Updated regularly
          </p>
        </div>
      </div>
    </div>
  );
}
