import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-muted-foreground">
            <span>Developed</span>
            <span>by</span>
            <span className="font-semibold text-foreground">Yuan</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear}</span>
            <span>•</span>
            <span>All rights reserved</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Made with</span>
            <span className="font-medium text-primary">React</span>
            <span className="text-muted-foreground">&</span>
            <span className="font-medium text-primary">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
