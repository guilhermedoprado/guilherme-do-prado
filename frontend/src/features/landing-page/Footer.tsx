export default function Footer({ t }: { t: any }) {
  const currentYear = new Date().getFullYear();

  const madeWith = t.footer?.madeWith || 'Built with';
  const by = t.footer?.by || 'by Guilherme do Prado.';

  return (
      <footer className="bg-[#1E0F4A] border-t border-purple-900/50 py-12 text-center text-purple-400 text-sm">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
          <span>© {currentYear} · {madeWith} React & Tailwind</span>
          <span className="hidden md:inline">·</span>
          <span className="font-medium text-purple-200">{by}</span>
        </div>
      </footer>
  );
}
