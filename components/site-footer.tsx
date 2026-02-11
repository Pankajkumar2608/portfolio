export function SiteFooter() {
  return (
    <footer className="pt-10 border-t border-border">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center text-sm">
        <p className="text-muted-foreground text-xs">
          {"Design & Developed by "}
          <strong className="text-foreground font-medium">Pankaj Kumar</strong>
        </p>
        <div className="flex items-center gap-5 text-xs text-muted-foreground/50">
          <a
            href="https://github.com/pankajkumar2608"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors link-underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pankaj-jaat/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors link-underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:pankajjaat2608@gmail.com"
            className="hover:text-foreground transition-colors link-underline"
          >
            Email
          </a>
          <span>{"© 2026. All rights reserved."}</span>
        </div>
      </div>
    </footer>
  );
}
