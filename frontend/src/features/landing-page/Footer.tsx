export default function Footer({ t }: { t: any }) {
  const currentYear = new Date().getFullYear();

  const madeWith = t.footer?.madeWith || 'Built with';
  const by = t.footer?.by || 'by Guilherme do Prado.';

  return (
    <footer className="bg-[#1B2A4A] border-t border-slate-800 py-12 text-center text-slate-400 text-sm">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
        <span>© {currentYear} · {madeWith} React & Tailwind</span>
        <span className="hidden md:inline">·</span>
        <span className="font-medium text-slate-300">{by}</span>
      </div>
    </footer>
  );
}
