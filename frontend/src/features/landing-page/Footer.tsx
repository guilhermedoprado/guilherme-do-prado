

export default function Footer({ t }: { t: any }) {
  const currentYear = new Date().getFullYear();

  // Proteção: Se t.footer não existir, use textos padrão
  const madeWith = t.footer?.madeWith || 'Built with';
  const by = t.footer?.by || 'by Guilherme do Prado.';

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10 text-center text-gray-500 text-sm">
      <div className="flex items-center justify-center gap-1">
        <span>© {currentYear} · {madeWith} React + Tailwind</span>
        {/* <Heart size={12} className="text-red-500 fill-red-500" /> */}
        <span>{by}</span>
      </div>
    </footer>
  );
}
