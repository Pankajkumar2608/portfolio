export function SiteFooter() {
  return (
    <footer className="pt-10 border-t border-border">
      <div className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
        <div className="space-y-1">
          <div className="font-medium text-foreground text-sm">Pankaj Kumar</div>
          <p className="text-muted-foreground text-xs">Rajasthan, India</p>
        </div>
        <div className="flex items-center gap-6 text-xs text-muted-foreground/50">
          <a
            href="https://github.com/pankajkumar2608"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pankaj-jaat/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <span>{"© 2026"}</span>
        </div>
      </div>
    </footer>
  );
}
