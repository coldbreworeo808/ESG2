import { Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    company: [
      { label: '회사 소개', href: '#' },
      { label: '채용', href: '#' },
      { label: '뉴스룸', href: '#' },
    ],
    legal: [
      { label: '개인정보처리방침', href: '#' },
      { label: '이용약관', href: '#' },
      { label: '쿠키 정책', href: '#' },
    ],
    resources: [
      { label: '리포트', href: '#' },
      { label: '백서', href: '#' },
      { label: '문의', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Youtube, label: 'YouTube' },
    { icon: Instagram, label: 'Instagram' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-4 sm:px-6 lg:px-8 border-t border-cyan-900/30">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-sm"></div>
              <span className="text-xl font-bold text-white">NEXWAVE Energy</span>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              측정 가능한 변화로 증명하는
              <br />
              재생에너지 솔루션
            </p>
            <div className="text-sm text-slate-500 space-y-1">
              <p>서울특별시 강남구</p>
              <p>테헤란로 427</p>
              <p className="mt-3 text-slate-400">info@nexwave.energy</p>
              <p className="text-slate-400">02-1234-5678</p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">회사</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">법적 고지</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">리소스</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 border-2 border-slate-700 rounded-lg flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>© 2026 NEXWAVE Energy. All rights reserved.</p>
          <p className="mt-2 text-xs">
            사업자등록번호: 123-45-67890 | 대표: 홍길동
          </p>
        </div>
      </div>
    </footer>
  );
}
