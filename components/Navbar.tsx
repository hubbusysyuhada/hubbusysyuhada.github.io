export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden hidden md:block">
      <div className="bg-background/90 backdrop-blur-xl border border-border rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center gap-8">
          <div className="w-10 h-10 rounded-full border-2 border-primary bg-primary/20 flex items-center justify-center">
            <div className="text-sm font-bold text-primary">MH</div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1 rounded-full hover:bg-muted"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1 rounded-full hover:bg-muted"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1 rounded-full hover:bg-muted"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1 rounded-full hover:bg-muted"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1 rounded-full hover:bg-muted"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
