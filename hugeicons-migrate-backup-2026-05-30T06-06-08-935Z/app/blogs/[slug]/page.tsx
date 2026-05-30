import { blogs } from "@/lib/blogs";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { CursorGlow } from "@/components/cursor-glow";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ScrollProgress } from "@/components/scroll-progress";

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background relative selection:bg-highlight selection:text-white">
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 z-10 relative">
        <div className="relative mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Subtle Glow Backdrop */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3/4 h-32 bg-highlight/10 dark:bg-highlight/5 blur-[100px] rounded-full pointer-events-none -z-10" />
          
          <Link
            href="/blogs"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8 relative z-10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to blogs
          </Link>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-6 leading-tight tracking-tight relative z-10">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground mb-8 pb-8 border-b border-border relative z-10">
            <div className="flex items-center gap-2">
              <span>{blog.date}</span>
              <span className="opacity-50">•</span>
              <span className="text-foreground">{blog.readTime}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-secondary text-muted-foreground border border-border/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <article
          className="
          animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150
          [&>p]:text-muted-foreground [&>p]:leading-loose [&>p]:mb-7 [&>p]:text-base sm:[&>p]:text-lg
          [&>h2]:text-2xl sm:[&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-16 [&>h2]:mb-8 [&>h2]:tracking-tight
          [&>h3]:text-xl sm:[&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-foreground [&>h3]:mt-10 [&>h3]:mb-4
          [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:text-muted-foreground [&>ul>li]:mb-2
          [&>blockquote]:border-l-4 [&>blockquote]:border-highlight [&>blockquote]:pl-6 [&>blockquote]:py-1 [&>blockquote]:my-8 [&>blockquote]:text-xl [&>blockquote]:font-medium [&>blockquote]:text-foreground [&>blockquote]:italic [&>blockquote]:bg-highlight/5 [&>blockquote]:rounded-r-lg
          [&>em]:text-foreground/80 [&>strong]:text-foreground [&>strong]:font-semibold
          [&_a]:text-highlight [&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:text-highlight/80
          max-w-none
        "
        >
          {blog.content}
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
