import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="font-mono text-xs text-muted-foreground">
            © 2025 Mamoudou Sidibe. Built with passion.
          </span>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          <span className="text-accent">{'>'}</span> Data Science & Machine Learning
        </div>
      </div>
    </footer>
  );
}