import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: '스토리', href: '#story' },
    { label: '소재', href: '#material' },
    { label: '공정', href: '#factory' },
    { label: '임팩트', href: '#impact' },
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
    <nav className="fixed top-0 left-0 right-0 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/50 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-700 to-green-800 rounded-sm opacity-90"></div>
            <span className="text-xl font-medium tracking-wider text-stone-800">
              VERDANT
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-stone-600 hover:text-emerald-700 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-2.5 bg-emerald-700 text-white text-sm font-medium rounded-full hover:bg-emerald-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              샘플 요청
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-stone-700 hover:text-emerald-700 transition-colors"
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
          <div className="md:hidden py-4 border-t border-stone-200">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-stone-600 hover:bg-stone-100 hover:text-emerald-700 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="block w-full text-left px-4 py-3 mt-2 bg-emerald-700 text-white text-sm font-medium rounded-full"
            >
              샘플 요청
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
