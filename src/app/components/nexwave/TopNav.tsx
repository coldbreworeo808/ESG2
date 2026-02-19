import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: '솔루션', href: '#solution' },
    { label: '임팩트', href: '#impact' },
    { label: '데이터', href: '#dashboard' },
    { label: '리포트', href: '#video' },
    { label: '문의', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-950/95 backdrop-blur-md border-b border-cyan-900/30 z-50 shadow-lg shadow-cyan-900/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-sm"></div>
            <span className="text-xl font-bold tracking-tight text-white">
              NEXWAVE Energy
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-500 hover:to-emerald-500 transition-all duration-200 shadow-lg shadow-cyan-900/30"
            >
              데모 요청
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-cyan-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-cyan-900/30">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-900/50 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="block w-full text-left px-4 py-3 mt-2 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white text-sm font-semibold rounded-lg"
            >
              데모 요청
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
